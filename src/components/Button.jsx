export default function Button({text, linkTo}){

    return(
        <>
        <a href={linkTo}>
            <button className="cta-button">{text}</button>
        </a>
        </>
    )
}