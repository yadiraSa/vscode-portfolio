const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>
        🤓I'm a passionate web developer who is always seeking for new
        challenges and the opportunity to continue learning and growing not just
        professionally but also personally 💻
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
