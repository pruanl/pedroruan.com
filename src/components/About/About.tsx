import React from "react";
import styled from "styled-components";
import Image, { FixedObject } from "gatsby-image";

import { SiteSiteMetadataAuthor } from "graphql-types";
import { rhythm } from "../../utils/typography";
import { yearsSince } from "../../utils/timeSince";
import { device } from "../../styles/constants";
import { useAvatar } from "../../hooks";

interface AboutProps {
  author: SiteSiteMetadataAuthor;
}

const About: React.FunctionComponent<AboutProps> = ({
  author,
}): React.ReactElement => {
  const avatar = useAvatar({ width: 200, height: 200 });

  return (
    <Root>
      <Avatar fixed={avatar.childImageSharp.fixed as FixedObject} />

      <Description>
        <h4>Hello my friend!</h4>
        <p>
          Me chamo {author.name} e tenho {yearsSince(author.birthDate)} anos.
          Sempre gostei de tecnologia e partilhar conhecimentos. Minha meta é
          ser mais atuante para a comunidade que sempre me ajudou.
        </p>

        <p>
          Sou home office desde 2017 com desenvolvimento web. Atualmente
          Laravel, Javascript e React Native são meus passa tempos, juntamente
          com HTML e CSS, o resto eu considero trabalho.
        </p>

        <p>
          Quando não estou construindo coisas tenho interesses por assuntos
          relacionados a educação financeiras, filosofia, ética e liberdade. Nas
          horas vagas estou a total disposição da minha noiva para assistir
          filmes e séries ruins enquanto ela dorme após 5 minutos do play.
        </p>

        <p>
          Quer saber mais sobre mim? Entre em contato através do email{" "}
          <strong>{author.social.email}</strong> ou nas redes sociais listadas
          no final dessa página. Um abraço!
        </p>
      </Description>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-gap: ${rhythm(2)};
  margin-top: ${rhythm(0.5)};

  @media ${device.tablet} {
    grid-template-columns: minmax(20%, 200px) 70%;
  }
`;

const Avatar = styled(Image)`
  align-self: center;

  border-radius: 50%;
  width: 150px;
  height: 150px;
  justify-self: center;
  align-self: flex-start;

  @media ${device.tablet} {
    width: auto;
    height: auto;
    justify-self: start;
  }
`;

const Description = styled.section`
  h4 {
    margin-top: ${rhythm(0.5)};
  }
`;

export default About;
