
const Button = ({
  text = "Soy un boton",
  clases = "text-white",
  color = "bg-blue-500"
}) => {

  const styles = {
    boton: "py-2 px-4 rounded"
  }

  return (
    <button className={`${styles.boton} ${clases} ${color}`}>{text}</button>
  )
}

export default Button