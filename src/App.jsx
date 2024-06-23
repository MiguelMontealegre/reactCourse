import './App.css'

import { CustomCard } from './custom-components/CustomCard.jsx';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const formatUserName = (userName) => {
    return `@${userName}`;
  };
  const organizationHtmlElem = <span><b>UTP</b> <i>www.utp.edu.co</i></span>
  const organizationHtmlElem2 = <span><b>UTP</b> <i>www.utp.edu.co_elem2</i></span>


  const cards = [
    {
      title: 'Miguel Angel',
      body: 'lorem ipsun111',
      organization: organizationHtmlElem2,
      footer: 'footertest111',
      initialFollow: true,
      photoUsername: 'midudev_1',
      childrenContent: 'childrennn111'
    },
    {
      title: 'Angel ANdres',
      body: 'lorem ipsun222',
      organization: organizationHtmlElem2,
      footer: 'footertest222',
      initialFollow: false,
      photoUsername: 'midudev_2',
      childrenContent: 'childrennn222'
    },
    {
      title: 'Natalia Montealegre',
      body: 'lorem ipsun333',
      organization: organizationHtmlElem2,
      footer: 'footertest333',
      initialFollow: false,
      photoUsername: 'midudev_3',
      childrenContent: 'childrennn333'
    },
  ];
  localStorage.setItem('cards', cards);

  return (
    <>

    {/* comentarios jsx */}

      <CustomCard 
      formatUserName={formatUserName} 
      title="CursoReact" 
      body="LoremIpsun" 
      organization={organizationHtmlElem} 
      photoUsername="midudev"
      footer="footerrTest"
      initialIsFollowing={true}>
        <b>ContenidoChildren</b>
      </CustomCard>


      

      {
          cards.map(({title, body, organization, footer, initialFollow, photoUsername, childrenContent}, index) => (
              <CustomCard 
                key={photoUsername}
                formatUserName={formatUserName} 
                title={title}
                body={body} 
                organization={organization} 
                photoUsername={photoUsername}
                footer={footer}
                initialIsFollowing={initialFollow}>
                <b>
                  {childrenContent}
                  index: {index}
                </b>
              </CustomCard>
          ))
        }



      {/*

       {
        cards.map((item, index) => {
          const {title, body, organization, footer, initialFollow, photoUsername, childrenContent} = item;
          return(
            <CustomCard 
              key={photoUsername}
              formatUserName={formatUserName} 
              title={title}
              body={body} 
              organization={organization} 
              photoUsername={photoUsername}
              footer={footer}
              initialIsFollowing={initialFollow}>
              <b>
                {childrenContent}
                index: {index}
              </b>
            </CustomCard>
          )
        })
      }
      
      */}
  
 



      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
