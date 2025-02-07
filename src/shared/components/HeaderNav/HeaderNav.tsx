import './HeaderNav.scss';

export default function HeaderNav() {
    return (
        <header>
            <div className='logo-container'>Emporium</div>
            <div className='nav-container'>
                <ul>
                    <li>about</li>
                    <li>search</li>
                    <li>cart</li>
                    <li>login</li>
                </ul>
            </div>
        </header>

    );
}