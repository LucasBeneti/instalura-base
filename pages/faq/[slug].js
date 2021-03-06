import React from 'react';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';
import websitePageHOC from '../../src/components/wrappers/WebSitePage/hoc';

function FAQInternaScreen({ category, question }) {
  return <FAQQuestionScreen question={question} category={category} />;
}

FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQInternaScreen);

export async function getStaticProps({ params }) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (response) => {
    const resposta = await response.json();
    return resposta.data;
  });

  const dadosDaPagina = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if (question.slug === params.slug) {
        return true;
      }
      return false;
    });
    if (foundQuestion) {
      return {
        ...valorAcumulado,
        category: faqCategory,
        question: foundQuestion,
      };
    }
    return valorAcumulado;
  }, {});
  return {
    props: {
      category: dadosDaPagina.category,
      question: dadosDaPagina.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPagina.question.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (response) => {
    const resposta = await response.json();
    return resposta.data;
  });

  const paths = await faqCategories.reduce((valorAcumulado, faqCategory) => {
    const questionsPaths = faqCategory.questions.map((question) => ({ params: { slug: question.slug } }));

    return [...valorAcumulado, ...questionsPaths];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
