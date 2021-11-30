import React from 'react';

function Blog() {
  return (
    <div class="tab-pane container fade" id="blog" role="tabpanel" aria-labelledby="blog-tab">
        <h1 className="mt-5" id="">The Plan for React 18</h1>
        <p className="mt-2">June 08, 2021 by Andrew Clark, Brian Vaughn, Christine Abernathy, Dan Abramov, Rachel Nabors, Rick Hanlon, Sebastian Markbåge, and Seth Webster</p>
        <p className="mt-5">The React team is excited to share a few updates:</p>
        <ol>
          <li>We’ve started work on the React 18 release, which will be our next major version.</li>
          <li>We’ve created a Working Group to prepare the community for gradual adoption of new features in React 18.</li>
          <li>We’ve published a React 18 Alpha so that library authors can try it and provide feedback.</li>
        </ol>
    </div>


  );
}

export default Blog;
