import React from "react";
import estilo from "./css/Feed.module.css";
import Posts from "./Posts";
import Amigos from "./Amigos";
const Feed = () => {
  return (
    <>
      <main className={estilo.feedMain}>
        <section className={estilo.grid}>
          <Posts
            postImagemAvatar={
              "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
            }
            postTitulo={"Título 01"}
            postData={"24 de Abril de 2023"}
            postImagem={
              "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
            }
            postTexto={
              " This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with the"
            }
            postCurtidas={4.9}
            postCompartilhamentos={0.9}
          />
          <Posts
            postImagemAvatar={
              "https://img.elo7.com.br/product/main/3B06B23/imagem-digital-jesus-e-leao-foto-para-quadro.jpg"
            }
            postTitulo={"Título 02"}
            postData={"25 de Dezembro de 2023"}
            postImagem={
              "https://img.elo7.com.br/product/main/3B06B23/imagem-digital-jesus-e-leao-foto-para-quadro.jpg"
            }
            postTexto={
              "A incrível história de dois reis, Jesus Crito e o Leão."
            }
            postCurtidas={45.3}
            postCompartilhamentos={105.2}
          />
          <Posts
            postImagemAvatar={
              "https://t.ctcdn.com.br/AthW2lYFuEnGURVf4_0FtODm-L8=/720x405/smart/filters:format(webp)/i257652.jpeg"
            }
            postTitulo={"Título 03"}
            postData={"20 de Janeiro de 2024"}
            postImagem={
              "https://t.ctcdn.com.br/AthW2lYFuEnGURVf4_0FtODm-L8=/720x405/smart/filters:format(webp)/i257652.jpeg"
            }
            postTexto={
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and"
            }
            postCurtidas={5}
            postCompartilhamentos={0.2}
          />

          <Posts
            postImagemAvatar={
              "https://images.jota.info/wp-content/uploads/2022/11/emilio-garcia-awdcgddedh0-unsplash-1024x598.jpg"
            }
            postTitulo={"Título 04"}
            postData={"25 de Dezembro de 2023"}
            postImagem={
              "https://images.jota.info/wp-content/uploads/2022/11/emilio-garcia-awdcgddedh0-unsplash-1024x598.jpg"
            }
            postTexto={
              "A incrível história de dois reis, Jesus Crito e o Leão."
            }
            postCurtidas={45.3}
            postCompartilhamentos={105.2}
          />
          <Posts
            postImagemAvatar={
              "https://images.jota.info/wp-content/uploads/2022/11/emilio-garcia-awdcgddedh0-unsplash-1024x598.jpg"
            }
            postTitulo={"Título 05"}
            postData={"25 de Dezembro de 2023"}
            postImagem={
              "https://images.jota.info/wp-content/uploads/2022/11/emilio-garcia-awdcgddedh0-unsplash-1024x598.jpg"
            }
            postTexto={
              "A incrível história de dois reis, Jesus Crito e o Leão."
            }
            postCurtidas={45.3}
            postCompartilhamentos={105.2}
          />

          <Posts
            postImagemAvatar={
              "https://t.ctcdn.com.br/AthW2lYFuEnGURVf4_0FtODm-L8=/720x405/smart/filters:format(webp)/i257652.jpeg"
            }
            postTitulo={"Título 06"}
            postData={"20 de Janeiro de 2024"}
            postImagem={
              "https://t.ctcdn.com.br/AthW2lYFuEnGURVf4_0FtODm-L8=/720x405/smart/filters:format(webp)/i257652.jpeg"
            }
            postTexto={
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and"
            }
            postCurtidas={5}
            postCompartilhamentos={0.2}
          />
          <Posts
            postImagemAvatar={
              "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
            }
            postTitulo={"Título 07"}
            postData={"24 de Abril de 2023"}
            postImagem={
              "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
            }
            postTexto={
              " This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with the"
            }
            postCurtidas={4.9}
            postCompartilhamentos={0.9}
          />

          <Posts
            postImagemAvatar={
              "https://img.elo7.com.br/product/main/3B06B23/imagem-digital-jesus-e-leao-foto-para-quadro.jpg"
            }
            postTitulo={"Título 08"}
            postData={"25 de Dezembro de 2023"}
            postImagem={
              "https://img.elo7.com.br/product/main/3B06B23/imagem-digital-jesus-e-leao-foto-para-quadro.jpg"
            }
            postTexto={
              "A incrível história de dois reis, Jesus Crito e o Leão."
            }
            postCurtidas={45.3}
            postCompartilhamentos={105.2}
          />
        </section>
        <section className={estilo.amizades}>
          <Amigos />
        </section>
      </main>
    </>
  );
};

export default Feed;
