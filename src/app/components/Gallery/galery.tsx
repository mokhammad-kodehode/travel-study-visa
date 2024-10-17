import React, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const photos = [
  { id: 1, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300},
  { id: 2, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 3, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 4, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300},
  { id: 5, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 6, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 7, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 8, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 9, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 10, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 11, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 12, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 13, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 14, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },
  { id: 15, src: '/images/japan.jpg', title: 'Japan', width: 500, height: 300 },

  // Добавьте другие фотографии
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <h1>Галерея стран</h1>
      <div className={styles.gallery}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.photo}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={photo.width}
              height={photo.height}
              onClick={() => openModal(photo.src)}
              className={styles.image}
              layout="responsive" // Оптимизация для разных экранов
            />
            <div className={styles.title}>{photo.title}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <span className={styles.close}>&times;</span>
          <Image
            src={selectedImage}
            alt="Selected"
            width={1000}
            height={600}
            className={styles.modalContent}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;