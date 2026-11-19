import styles from "./ProductCard.module.css"

export default function ProductCard({nome, prezo}){
    return <div className="produto">Nome: {nome}. Prezo: {prezo}</div>
}
