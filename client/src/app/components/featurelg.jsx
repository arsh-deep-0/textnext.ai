import React from 'react';

function FeatureLg(props) {
  let content = null;

  if (props.order === 1) {
    content = (
      <>
        <li>
          <span className="font-bold">Lead Magnets:</span> Attract potential clients with free resources like remodeling guides, cost estimators, and design inspiration to capture valuable leads.
        </li>
        <li>
          <span className="font-bold">Segmentation Advantage:</span> Segment leads by preferences, needs, and budgets, enabling tailored communication and targeted marketing for a personalized approach.
        </li>
        <li>
          <span className="font-bold">Nurture Leads:</span> Use email sequences triggered by landing page interactions to nurture leads with relevant content, special offers, and exclusive deals.
        </li>
        <li>
          <span class="font-bold">Track ROI:</span> Measure the ROI of marketing efforts to identify successful campaigns and allocate resources effectively.
        </li>
      </>
    );
  } else if (props.order === 2) {
    content = (
      <>
        <li>
          <span className="font-bold">Showcase Expertise:</span> Highlight your expertise through case studies, before-and-after galleries, testimonials, and success stories, building credibility and trust.
        </li>
        <li>
          <span className="font-bold">Build Credibility:</span> Incorporate testimonials from satisfied clients on landing pages, sharing positive experiences and outcomes, fostering trust and reliability.
        </li>
        <li>
          <span className="font-bold">Relate to Audience:</span> Craft case studies and testimonials that resonate with your target audience needs, preferences, and aspirations, making the content relatable and compelling.
        </li>
      </>
    );
  } else if (props.order === 3) {
    content = (
      <>
        <li>
          <span className="font-bold">Educate Effectively:</span> Provide valuable content such as blog posts, videos, and infographics, educating visitors about remodeling processes, trends, and cost-saving tips.
        </li>
        <li>
          <span className="font-bold">Lead Generation and Conversion Optimization:</span> Implementing lead capture forms, calls-to-action, and user-friendly interfaces to convert website visitors into potential clients. Offering strategies to enhance conversions through compelling content and easy-to-navigate layouts.
        </li>
      </>
    );
  } else if (props.order === 4) {
    content = (
      <>




        <li>
          <span class="font-bold">Realistic Interview Experience: </span>
Provides an authentic interview setting to ease anxiety and stress. 
        </li>
        <li>
          <span class="font-bold">Continuous Skill Enhancement: </span> Facilitates ongoing monitoring of progress and improvement in skills. 
        </li>
        <li>
          <span class="font-bold">Tailored Job Preparation: </span> Customized preparation approaches improve candidates' readiness for particular job positions. 
        </li>
      </>
    );
  }

  return (
    <div className="  ">
     
      <div className="m-4 rounded-md p-2">
        <ul className="text-white flex flex-col antics encodesans feature">
          {content}
        </ul>
      </div>
    </div>
  );
}

export default FeatureLg ;
