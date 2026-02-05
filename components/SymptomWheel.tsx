'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as d3 from 'd3';

interface SymptomWheelProps {
  onSectionClick?: ({ section }: { section: string }) => void;
}

const symptoms = [
  { name: 'Social Communication', color: '#FF6B9D', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/social-communication' },
  { name: 'Repetitive Behaviors', color: '#C44569', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/repetitive' },
  { name: 'Routines', color: '#A93F55', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/routines' },
  { name: 'Meltdowns', color: '#8B2E3F', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/meltdowns' },
  { name: 'Masking', color: '#6D1F2E', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/masking' },
  { name: 'Alexithymia', color: '#8E44AD', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/alexithymia' },
  { name: 'Executive Function', color: '#9B59B6', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/executive-function' },
  { name: 'Sensory Issues', color: '#AF7AC5', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/sensory' },
  { name: 'Hyperfocus', color: '#BB8FCE', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/hyperfocus' },
  { name: 'Interoception', color: '#D7BDE2', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/interoception' },
  { name: 'Rejection Sensitivity', color: '#3498DB', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/rejection-sensitivity' },
  { name: 'Emotional Dysregulation', color: '#5DADE2', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/emotional-dysregulation' },
  { name: 'Time Blindness', color: '#85C1E2', category: 'OVERLAP', path: '/pages/neurodivergent/symptom-quiz/time-blindness' },
  { name: 'Panic/Anxiety', color: '#AED6F1', category: 'ANXIETY', path: '/pages/neurodivergent/symptom-quiz/anxiety' },
  { name: 'Worrying', color: '#D6EAF8', category: 'ANXIETY', path: '/pages/neurodivergent/symptom-quiz/worrying' },
  { name: 'Inattentiveness', color: '#FF9A76', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/inattentiveness' },
  { name: 'Hyperactivity', color: '#FF7F50', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/hyperactivity' },
  { name: 'Impulsivity', color: '#FF6347', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/impulsivity' },
  { name: 'Dopamine Seeking', color: '#FF4500', category: 'ADHD', path: '/pages/neurodivergent/symptom-quiz/dopamine-seeking' },
  { name: 'Special Interests', color: '#DC143C', category: 'AUTISM', path: '/pages/neurodivergent/symptom-quiz/special-interests' },
];

// Helper function to wrap text
function wrapText({ text, maxWidth }: { text: any; maxWidth: number }) {
  text.each(function(this: any) {
    const textElement = d3.select(this);
    const words = textElement.text().split(/\s+/).reverse();
    let word;
    let line: string[] = [];
    let lineNumber = 0;
    const lineHeight = 1.1;
    const y = textElement.attr('y');
    const dy = parseFloat(textElement.attr('dy') || 0);
    let tspan = textElement.text(null).append('tspan').attr('x', 0).attr('y', y).attr('dy', dy + 'em');
    
    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(' '));
      if (tspan.node()!.getComputedTextLength() > maxWidth) {
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        tspan = textElement.append('tspan').attr('x', 0).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word);
      }
    }
  });
}

export const SymptomWheel = ({ onSectionClick }: SymptomWheelProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const router = useRouter();
  const [levels, setLevels] = useState<number[]>(new Array(symptoms.length).fill(0));

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const width = 800;
    const height = 800;
    const radius = Math.min(width, height) / 2 - 40;
    const innerRadius = 80;
    const numLevels = 5;
    const numSegments = symptoms.length;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('style', 'max-width: 100%; height: auto;');

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Calculate angles for each segment
    const anglePerSegment = (2 * Math.PI) / numSegments;
    const radiusPerLevel = (radius - innerRadius) / numLevels;

    // Create segments for each symptom and level
    symptoms.forEach((symptom, symptomIndex) => {
      const startAngle = symptomIndex * anglePerSegment - Math.PI / 2;
      const endAngle = startAngle + anglePerSegment;

      // Draw each level for this symptom
      for (let level = 1; level <= numLevels; level++) {
        const innerR = innerRadius + (level - 1) * radiusPerLevel;
        const outerR = innerRadius + level * radiusPerLevel;

        const arc = d3.arc()
          .innerRadius(innerR)
          .outerRadius(outerR)
          .startAngle(startAngle)
          .endAngle(endAngle)
          .padAngle(0.01);

        const isFilled = level <= levels[symptomIndex];

        g.append('path')
          .attr('d', arc as any)
          .attr('fill', isFilled ? symptom.color : '#f0f0f0')
          .attr('stroke', '#000000')
          .attr('stroke-width', 1.5)
          .attr('opacity', isFilled ? 0.8 : 0.3)
          .style('cursor', 'pointer')
          .on('click', function() {
            const newLevels = [...levels];
            newLevels[symptomIndex] = level;
            setLevels(newLevels);
            
            if (onSectionClick) {
              onSectionClick({ section: symptom.name });
            }
            router.push(symptom.path);
          })
          .on('mouseover', function() {
            d3.select(this)
              .attr('opacity', isFilled ? 1 : 0.5)
              .attr('stroke-width', 2.5);
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('opacity', isFilled ? 0.8 : 0.3)
              .attr('stroke-width', 1.5);
          });
      }

      // Add symptom labels inside segments (at mid-radius)
      const labelAngle = startAngle + anglePerSegment / 2;
      const labelRadius = innerRadius + (radius - innerRadius) * 0.5;
      const x = Math.cos(labelAngle) * labelRadius;
      const y = Math.sin(labelAngle) * labelRadius;

      // Calculate text rotation for better readability
      let textRotation = (labelAngle * 180 / Math.PI) + 90;
      if (textRotation > 90 && textRotation < 270) {
        textRotation += 180;
      }

      const textGroup = g.append('g')
        .attr('transform', `translate(${x},${y}) rotate(${textRotation})`);

      const text = textGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .attr('font-weight', 'bold')
        .attr('fill', '#000000')
        .attr('y', 0)
        .attr('dy', '-0.3em')
        .style('pointer-events', 'none')
        .text(symptom.name);

      // Wrap text to fit within segment width
      const segmentWidth = Math.abs(2 * labelRadius * Math.sin(anglePerSegment / 2)) * 0.7;
      wrapText({ text, maxWidth: segmentWidth });
    });

    // Add center circle with title
    g.append('circle')
      .attr('r', innerRadius)
      .attr('fill', '#ffffff')
      .attr('stroke', '#000000')
      .attr('stroke-width', 2);

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '16px')
      .attr('font-weight', 'bold')
      .attr('fill', '#000000')
      .attr('y', -10)
      .text('Neurodivergent');
    
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('y', 10)
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .attr('fill', '#000000')
      .text('Symptoms');

  }, [router, onSectionClick, levels]);

  const handleReset = () => {
    setLevels(new Array(symptoms.length).fill(0));
  };

  const maxLevel = Math.max(...levels);
  const hasData = maxLevel > 0;

  return (
    <div className="flex flex-col items-center">
      <svg ref={svgRef}></svg>
      <div className="mt-6 max-w-2xl space-y-4">
        <div className="flex justify-between items-center">
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Reset Levels
          </button>
          {hasData && (
            <p className="text-sm text-gray-600">
              Highest level: <span className="font-bold">{maxLevel}</span>
            </p>
          )}
        </div>
        <div className="p-4 bg-blue-50 rounded border border-blue-200">
          <p className="text-sm text-gray-700 mb-2">
            <strong>How to use:</strong> Click on any ring level of a symptom section to rate how much you relate (1-5 scale). 
            Then click through to explore detailed real-life examples and check off which experiences resonate with you.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            <strong>Levels:</strong> 1 = rarely/minimal, 5 = very often/significant impact
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="p-2 bg-red-50 rounded border border-red-200">
            <strong>AUTISM:</strong> Pink/Red tones
          </div>
          <div className="p-2 bg-orange-50 rounded border border-orange-200">
            <strong>ADHD:</strong> Orange tones
          </div>
          <div className="p-2 bg-blue-50 rounded border border-blue-200">
            <strong>ANXIETY:</strong> Light blue tones
          </div>
          <div className="p-2 bg-purple-50 rounded border border-purple-200">
            <strong>OVERLAP:</strong> Purple tones
          </div>
        </div>
      </div>
    </div>
  );
};
