import '@styles/global.css';
{/* layout file is used for stuff that remains constant throuout all the pages */}

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title:"Promptopia",
    description: "Discover & share AI prompts"
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body lang='en'>
            <div className='main'>
                <div className="gradient"/>

            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
