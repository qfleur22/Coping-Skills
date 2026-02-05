'use client';

import { useEffect, useRef } from 'react';
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

export const SymptomWheel = ({ onSectionClick }: SymptomWheelProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const width = 600;
    const height = 600;
    const radius = Math.min(width, height) / 2 - 80;
    const innerRadius = 60;
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

    // Create segments for each symptom
    symptoms.forEach((symptom, index) => {
      const startAngle = index * anglePerSegment - Math.PI / 2;
      const endAngle = startAngle + anglePerSegment;

      const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius)
        .startAngle(startAngle)
        .endAngle(endAngle)
        .padAngle(0.02);

      const segment = g.append('path')
        .attr('d', arc as any)
        .attr('fill', symptom.color)
        .attr('stroke', '#000000')
        .attr('stroke-width', 2)
        .attr('opacity', 0.8)
        .style('cursor', 'pointer')
        .on('click', function() {
          if (onSectionClick) {
            onSectionClick({ section: symptom.name });
          }
          router.push(symptom.path);
        })
        .on('mouseover', function() {
          d3.select(this)
            .attr('opacity', 1)
            .attr('stroke-width', 3);
        })
        .on('mouseout', function() {
          d3.select(this)
            .attr('opacity', 0.8)
            .attr('stroke-width', 2);
        });

      // Add symptom labels around the edge
      const labelAngle = startAngle + anglePerSegment / 2;
      const labelRadius = radius + 30;
      const x = Math.cos(labelAngle) * labelRadius;
      const y = Math.sin(labelAngle) * labelRadius;

      // Calculate text rotation for better readability
      let textRotation = (labelAngle * 180 / Math.PI) + 90;
      if (textRotation > 90 && textRotation < 270) {
        textRotation += 180;
      }

      const text = g.append('text')
        .attr('transform', `translate(${x},${y}) rotate(${textRotation})`)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '11px')
        .attr('font-weight', 'bold')
        .attr('fill', '#000000')
        .style('cursor', 'pointer')
        .style('pointer-events', 'none')
        .text(symptom.name);
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
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .attr('fill', '#000000')
      .text('Neurodivergent');
    
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('y', 15)
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('fill', '#000000')
      .text('Symptoms');

  }, [router, onSectionClick]);

  return (
    <div className="flex flex-col items-center">
      <svg ref={svgRef}></svg>
      <div className="mt-6 max-w-2xl space-y-4">
        <div className="p-4 bg-blue-50 rounded border border-blue-200">
          <p className="text-sm text-gray-700">
            <strong>How to use:</strong> Click on any section of the wheel to explore real-life examples of that symptom. 
            You'll be able to check off which experiences resonate with you.
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
