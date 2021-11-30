import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container text-info">
        <div className="d-flex">
          <div className="">
            <img src="index.png"/>
            <p>Copyright © 2021 Facebook Inc.</p>
          </div>
          <div>
            <div className="row">
                <div className="col">
                  <h4>Docs</h4>
                  <ul>
                    <li>Installation</li>
                    <li>Main Concepts</li>
                    <li>Advanced Guides</li>
                    <li>API Reference</li>
                    <li>Hooks</li>
                    <li>Testing</li>
                    <li>Contributing</li>
                    <li>FAQ</li>
                  </ul>
                </div>
                <div className="col">
                  <h4>Channels</h4>
                  <ul>
                    <li>GitHub</li>
                    <li>Stack Overflow</li>
                    <li>Discussion Forums</li>
                    <li>Reactiflux Chat</li>
                    <li>DEV Community</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                  </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                  <h4>Community</h4>
                  <ul>
                    <li>Code of Conduct</li>
                    <li>Community Resources</li>
                  </ul>
                </div>
              <div className="col">
                  <h4>More</h4>
                  <ul>
                    <li>Tutorial</li>
                    <li>Blog</li>
                    <li>Acknowledgements</li>
                    <li>React Native</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
