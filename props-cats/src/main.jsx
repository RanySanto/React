import { createRoot } from 'react-dom/client'

import ReactDom from 'react-dom/client'
import Contact from './Contact';

function App(){
    return(
        <div className='container'>
            <Contact
                img='/src/images/cat-portrait1.webp'
                name='Magpie'
                phone='(212) 555-5123'
                email='Magpie@catnap.meow'
            />
            <Contact
                img='/src/images/cat-portrait2.webp'
                name='Mr. Whiskerson'
                phone='(432) 555-1234'
                email='mr.whiskaz@catnap.meow'
            />
            <Contact
                img='/src/images/cat-portrait3.webp'
                name='Kitty'
                phone='(412) 555-5426'
                email='Kitty@catnap.meow'
            />
            <Contact
                img='/src/images/cat-portrait4.webp'
                name='Zoodles'
                phone='(231) 555-7345'
                email='Zoodles@catnap.meow'
            />
        </div>
    
    )
}


ReactDom.createRoot(document.getElementById('root')).render(<App/>);
