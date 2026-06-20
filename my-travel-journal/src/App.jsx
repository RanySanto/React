import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

export default function App() {
    const entryElements = data.map((entry)=>{
        return <Entry 
                    key = {entry.id}
                    {...entry}

                    // More clear way to know the passed data
                    // img = {entry.img}
//                     title = {entry.title}
//                     country = {entry.country}
//                     googleMapsLink = {entry.googleMapsLink}
//                     dates = {entry.dates}
//                     text = {entry.text}
                />
    })
    return(
        <main>
            <Header/>
            {entryElements}
        </main>
    )
    
}