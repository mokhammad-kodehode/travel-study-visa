
"use client"
import CountryGallery from "../components/Gallery/galery";
import styles from './styles.module.css'

const GalleryPage = () => {
  return (
    <div className={styles.сontainer} >
      <CountryGallery />
    </div>
  );
};

export default GalleryPage;