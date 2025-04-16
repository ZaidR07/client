import React from 'react';
import styled from 'styled-components';

const CopyrightPolicy = () => {
    return (
        <StyledCopyright>
            <h1>CopyRight Policy</h1><br /><br />
            <p>Welcome to Fitness365!

                This Copyright Policy describes the terms under which you may use the content on our website, including text, images, videos, and any other material ("Content").<br></br><br />

                Ownership:

                All Content on Fitness365 is owned by Fitness365 or its licensors and is protected by copyright laws. You may not reproduce, distribute, modify, or create derivative works of the Content without explicit permission from Fitness365.<br></br><br />

                Permitted Use:

                You may use the Content for personal, non-commercial purposes, including browsing the website, accessing information, and engaging with our services.<br></br><br />

                Prohibited Use:

                You may not use the Content for any commercial purpose without prior written consent from Fitness365. This includes but is not limited to selling, licensing, or distributing the Content.

                You may not modify, alter, or remove any copyright, trademark, or other proprietary rights notices from the Content.<br></br><br />

                User-Generated Content:

                Any content submitted or uploaded by users, including comments, reviews, and forum posts, belongs to the respective users. By submitting content to Fitness365, users grant Fitness365 a perpetual, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works, and distribute the content.<br></br><br />

                Reporting Copyright Infringement:

                If you believe that your copyright has been infringed upon by any Content on Fitness365, please contact us immediately at [contact email]. Include detailed information about the allegedly infringing material and your contact information.<br></br><br />

                Changes to Policy:

                Fitness365 reserves the right to modify or update this Copyright Policy at any time. Changes will be effective immediately upon posting on the website. Please review this policy periodically for any updates.<br></br><br />

                Contact Us:

                If you have any questions or concerns about this Copyright Policy, please contact us at [officialfitness365mumbai@gmail.com].<br></br><br />

                Last Updated: [26/04/2024].</p>
        </StyledCopyright>
    );
};

const StyledCopyright = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 80vw;
  margin-left: 10vw;
  padding: 5vh;
  background-color: #CC3D00;

  h1{
    text-align: center;
    color: white;
  }

  p{
    /* white-space: pre; */
    text-align: justify;
    color: white;
  }
`;

export default CopyrightPolicy;
