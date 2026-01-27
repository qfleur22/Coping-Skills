'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import feelingsData from '@/data/feelings-data.json';

interface FeelingsWheelProps {
  onEmotionSelect: ({ emotion }: { emotion: string }) => void;
  selectedEmotions: string[];
}

export const FeelingsWheel = ({ onEmotionSelect, selectedEmotions }: FeelingsWheelProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const width = 900;
    const height = 900;
    const bandSize = 150;
    const radius = Math.min(width, height) / 2;

    const color = d3
      .scaleOrdinal<string>()
      .domain([0, 2 * Math.PI].map(String))
      .range(['red', 'orange', 'yellow', 'green', 'blue', 'pink']);

    d3.select(svgRef.current).selectAll('*').remove();

    const g = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const partition = d3.partition().size([2 * Math.PI, radius]);

    type FeelingsNode = {
      name?: string;
      color?: string;
      text?: string;
      size?: number;
      children?: FeelingsNode[];
    };

    const root = d3.hierarchy<FeelingsNode>(feelingsData as FeelingsNode).sum((d: FeelingsNode) => {
      return d.size ?? 0;
    });

    partition(root as d3.HierarchyNode<unknown>);

    type PartitionedNode = d3.HierarchyNode<FeelingsNode> & {
      x0: number;
      x1: number;
    };

    const arc = d3
      .arc<PartitionedNode>()
      .startAngle((d: PartitionedNode) => d.x0)
      .endAngle((d: PartitionedNode) => d.x1)
      .innerRadius((d: PartitionedNode) => {
        return d.depth === 0 ? 0 : (d.depth - 1) * bandSize;
      })
      .outerRadius((d: PartitionedNode) => {
        return d.depth === 0 ? 0 : d.depth * bandSize;
      });

    const getFillColor = (d: PartitionedNode) => {
      const data = d.data;
      const parentData = d.parent?.data as FeelingsNode | undefined;

      if (d.depth === 1) {
        return data.color ?? 'gray';
      }
      if (d.depth === 2) {
        return parentData?.color ?? 'gray';
      }
      if (d.depth === 3) {
        return parentData?.color ?? color(String(d.x1));
      }
      return color(String(d.x1));
    };

    const getTextColor = (d: PartitionedNode) => {
      const data = d.data;
      const parentData = d.parent?.data as FeelingsNode | undefined;

      if (d.depth === 3 && parentData?.color === 'yellow') {
        return 'black';
      }
      if (d.depth === 3 && parentData?.color === 'orange') {
        return 'black';
      }
      if (data.color === 'yellow') {
        return 'black';
      }
      if (data.color === 'orange') {
        return 'black';
      }
      return 'white';
    };

    const computeTextRotation = (d: PartitionedNode) => {
      const angle = ((d.x0 + d.x1) / Math.PI) * 90;
      return angle < 180 ? angle - 90 : angle + 90;
    };

    const getEmotionName = (d: PartitionedNode): string => {
      return d.data.name ?? '';
    };

    const nodes = g
      .selectAll<SVGGElement, PartitionedNode>('g')
      .data(root.descendants() as PartitionedNode[])
      .enter()
      .append('g')
      .attr('class', 'node')
      .style('cursor', 'pointer');

    nodes
      .append('path')
      .attr('display', (d) => {
        return d.depth ? null : 'none';
      })
      .attr('d', arc)
      .style('stroke', 'black')
      .style('fill', getFillColor)
      .on('click', (_event, d) => {
        const emotionName = getEmotionName(d);
        if (emotionName && d.depth && d.depth > 0) {
          onEmotionSelect({ emotion: emotionName });
        }
      });

    nodes
      .append('text')
      .attr('transform', (d) => {
        const centroid = arc.centroid(d);
        const rotation = computeTextRotation(d);
        return `translate(${centroid})rotate(${rotation})`;
      })
      .attr('dy', '.5em')
      .text((d) => {
        return d.parent ? getEmotionName(d) : '';
      })
      .style('text-anchor', 'middle')
      .attr('fill', getTextColor)
      .style('pointer-events', 'none')
      .style('font-weight', (d) => {
        const emotionName = getEmotionName(d);
        return selectedEmotions.includes(emotionName) ? 'bold' : 'normal';
      });
  }, [onEmotionSelect, selectedEmotions]);

  return (
    <div className="hidden lg:flex justify-center items-center w-full">
      <svg ref={svgRef} className="max-w-full h-auto" />
    </div>
  );
};

