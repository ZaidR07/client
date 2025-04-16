import React from 'react'
import styled from 'styled-components'

const Terms_and_condition = () => {
    return (
        <StyledTerms>
            <h1>Terms & Conditions</h1><br /><br />
            <p>Welcome to Fitness365!<br></br><br />

                These terms of use govern your access to and use of the diet and workout services provided by Fitness365.<br></br><br />

                1. Eligibility:

                By using the diet and workout services provided by Fitness365, you represent and warrant that you are at least 18 years old or have parental consent to use the services.<br></br><br />

                2. Personal Responsibility:

                You understand and acknowledge that the diet and workout services provided by Fitness365 are for informational purposes only and do not constitute medical advice. You agree to consult with a qualified healthcare professional before starting any diet or exercise program.<br></br><br />

                3. User Account:

                In order to access certain features of the diet and workout services, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.<br></br><br />

                4. Personal Information:

                You agree to provide accurate and complete information when creating your user account and using the diet and workout services. Fitness365 may collect and use your personal information in accordance with its Privacy Policy.<br></br><br />

                5. Use of Content:

                The diet and workout services provided by Fitness365 may include content such as meal plans, exercise routines, videos, and articles. You agree to use this content solely for personal, non-commercial purposes and to follow any instructions or guidelines provided by Fitness365.<br></br><br />

                6. Assumption of Risk:

                You understand and acknowledge that participating in diet and exercise programs involves inherent risks, including but not limited to the risk of injury or illness. You voluntarily assume all risks associated with using the diet and workout services provided by Fitness365.<br></br><br />

                7. Limitation of Liability:

                In no event shall Fitness365, nor any of its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in any way connected with your use of the diet and workout services.<br></br><br />

                8. Indemnification:

                You agree to indemnify and hold Fitness365 harmless from any and all claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney's fees) arising out of or in any way related to your use of the diet and workout services.<br></br><br />

                9. Modification of Terms:

                Fitness365 reserves the right to modify or update these terms of use at any time. Changes will be effective immediately upon posting on the website. It is your responsibility to review these terms periodically for any updates.<br></br><br />

                10. Contact Us:

                If you have any questions or concerns about these terms of use, please contact us at [officialfitness365mumbai@gmail.com].</p>
        </StyledTerms>
    )
}

const StyledTerms = styled.div`
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
`
export default Terms_and_condition