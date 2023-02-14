import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4868613074923!2d72.88521101412393!3d19.086285956610702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87d56a2f271%3A0xbccf3a6c23c917fa!2s%3A%20PHOENIX%20MARKETCITY%2C%20Kurla%20West%2C%20Kurla%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1665988261979!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="W3Schools Free Online Web Tutorials"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mzbwazaq" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="userkanaam" autoComplete="off" required />
            <input type="email" placeholder="Email" name="Emaildaal" autoComplete="off" required />
            <textarea placeholder="message" name="details" cols="30" rows="10" autoComplete="off" required></textarea>
            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
