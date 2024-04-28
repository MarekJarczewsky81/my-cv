import { Header } from '../Header';
import { Personal } from '../Personal';
import { Details } from '../Details';

import './CV.scss';
import { CVData } from '../types';

const CV = () => {
  const cvData: CVData = {
    personal: {
      photo: "https://placehold.co/400x400?text=MJ",
      name: "Marek",
      lastName: "Jarczewski",
      position: "Developer",
    },
    details: {
      experience: [
        { year: 2020, description: "Lorem ipsum"},
        { year: 2023, description: "Dolor sit amet"},
      ],
      education: [
        "Lorem ipsum",
        "Dolor sit amet",
        "Ala ma kota"
      ]
    }
  }

  return (
    <main className='cv-main'>
      <Header data={cvData.personal} />
      <Personal data={cvData.personal} />
      <Details data={cvData.details} />
    </main>
  )
}

export { CV };