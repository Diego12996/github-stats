import * as Style from "./styles";

const languages = {
  javascript: "#F2C94C",
  ruby: "#701516",
  html: "#E34C26",
  css: "#563D7C"
}

function CardRepo({ language, name, description, stars, forks }) {
  const languageParse = language && language.toLowerCase();

  return (
    <Style.Container>
      <Style.Name>{ name }</Style.Name>
      <Style.Text>{ description || "No description" }</Style.Text>
      <Style.Extra>
        <Style.Group>
          <Style.Language color={languages[languageParse] || "gray"} />
          <Style.Text>{language || "None"}</Style.Text>
        </Style.Group>
        <Style.Group>
          <Style.Star />
          <Style.Text>{stars}</Style.Text>
        </Style.Group>
        <Style.Group>
          <Style.Fork />
          <Style.Text>{forks}</Style.Text>
        </Style.Group>
      </Style.Extra>
    </Style.Container>
  );
};

export default CardRepo;
