import styles from './CarDetailsCss.module.css'

const CarDetailsCss = ({car}) => {
  return (
    <div className={styles.all_elements}>
        <p className={styles.brand_style}>Marca: {car.brand}</p>
        <p className={styles.other_informations}>Cor: {car.color}</p>
        <p className={styles.other_informations}>KM: {car.km}</p>
        {car.newCar && <p className={styles.other_informations}>Estado: Novo</p>}
        {!car.newCar && <p className={styles.other_informations}>Estado: Usado</p>}
    </div>
  )
}

export default CarDetailsCss