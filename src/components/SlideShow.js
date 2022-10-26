// Import des éléments React
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import vectorRight from '../assets/Vector_right.png'
import vectorLeft from '../assets/Vector_left.png'

// Import des élément de back-end
import housing from '../data/housing.json'

// Import des élément de style
import '../styles/styleComponents/Gallery.css'

function Gallery () {
  // Recherche dans l'URL l'iD du produit //
  const { id } = useParams()
  // Rechercher de l'informations "Pictures" du prduit dans le fichier JSON grâce à l'ID récupérer par le Params
  const housingPictures = housing.find(object => object.id === id)
  const { pictures } = housingPictures

  // Hook useState pour définir quel images doit être affichée
  // et quel sera la prochaine image avec la mise à jour SetCurent de "curent"
  const [current, setCurrent] = useState(0)

  /* Si l'image est la dernière de la liste alors retour à la prmière image*/
  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1)
  }

  /* Si l'image est la première de la liste alors retour à la dernière image */
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1)
  }

  return (
    <section id='gallery'>
      {/* Tant qu'il y à plus  d'une image affichage des boutons de naviagation */}
      {pictures.length > 1 && (
        <i className='fa-solid fa-chevron-left' onClick={prevSlide}>
          <img
            src={vectorLeft}
            alt='flèche vers la gauche'
            className='carousel-btn-left'
          />
        </i>
      )}
      {pictures.length > 1 && (
        <i className='fa-solid fa-chevron-right' onClick={nextSlide}>
          <img
            src={vectorRight}
            alt='flèche vers la droite'
            className='carousel-btn-right'
          />
        </i>
      )}

      {/* Utilisation de la fonction map pour créer un  nouveau tableau "pictures" à partir du fichier JSON
             avec les arguments index pour traiter l'élément en cours et "img" pour l'image à afficher */}
      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {/* Va chercher dans l'index l'élement "en cours" avec sont image et sont numéro dans la pictures lenght */}
            {index === current && (
              <img
                src={img}
                alt='Photos du logement'
                className='gallery-image'
              />
            )}
            {index === current && (
              <span className='gallery-image-number'>
                {/* Curent +1 pour commencer l'affichage à 1 et non pas à 0 et pictures.length pour afficher les nombre total d'images */}
                {current + 1}/{pictures.length}
              </span>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Gallery
