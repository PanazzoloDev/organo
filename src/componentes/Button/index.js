import './Button.css';

const Button = (props) => {
    return(
        <div className='Button'>
            <button>
                {props.Text}
            </button>
        </div>
    )
}

export default Button;