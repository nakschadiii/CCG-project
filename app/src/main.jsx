import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Carousel } from 'flowbite-react';
import { BrowserRouter, Routes, Route, Navigate, Link, useParams, redirect, useNavigate } from 'react-router-dom';
document.querySelector('#root').classList = 'flex flex-col items-center gap-12';
document.querySelector('html').classList = 'scroll-smooth';

const App = {
    Page : ({}) => {
        return <>
            {false && <div className='opacity-50 bg-black md:bg-red-500 lg:bg-blue-500 xl:bg-teal-500 fixed w-screen h-screen z-50'></div>}
            <Routes>
                <Route path="/" element={
                    <App.Layout.Body>
                        <div className="w-full flex flex-col gap-6 items-center text-base md:text-xl text-gray-400 max-w-[1340px] text-center px-12">
                            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                                <h1 className="text-4xl text-black">Nos services</h1>
                                <p>Avec des valeurs hautes en couleurs, COPYCAT GROUP est une entreprise française née de l’ambition de remettre le service et la simplicité au coeur des solutions documentaires, digitales et bureautiques.</p>
                                <p>La simplicité par un contact unique pour traiter et vous accompagner sur tous vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
                                <p>Le service, car nous croyons au fond qu’il n’y a pas de solutions pertinentes sans accompagnement, conseils et approche humaine tout au long de la vie de votre projet.</p>
                                <p>C’est ce que nous appelons « Document as a Service »</p>
                            </div>
                            <div className='grid max-lg:grid-rows-4 lg:grid-cols-4 h-fit w-full gap-6'>
                                <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                                    <div className="flex flex-col gap-2">
                                        <img src="Solutions.svg" className="h-[200px] aspect-square w-fit" />
                                        <span>COPYCAT SOLUTIONS</span>
                                    </div>
                                    <p className='text-gray-400'>
                                        Vous souhaitez acheter ou louer des solutions bureautiques ?
                                    </p>
                                    <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
                                </div>
                                <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                                    <div className="flex flex-col gap-2">
                                        <img src="Shop.svg" className="h-[200px] aspect-square w-fit" />
                                        <span>COPYCAT SOLUTIONS</span>
                                    </div>
                                    <p className='text-gray-400'>
                                        Vous souhaitez acheter ou louer des solutions bureautiques ?
                                    </p>
                                    <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
                                </div>
                                <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                                    <div className="flex flex-col gap-2">
                                        <img src="Print.svg" className="h-[200px] aspect-square w-fit" />
                                        <span>COPYCAT SOLUTIONS</span>
                                    </div>
                                    <p className='text-gray-400'>
                                        Vous souhaitez acheter ou louer des solutions bureautiques ?
                                    </p>
                                    <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
                                </div>
                                <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                                    <div className="flex flex-col gap-2">
                                        <img src="Labs.svg" className="h-[200px] aspect-square w-fit" />
                                        <span>COPYCAT SOLUTIONS</span>
                                    </div>
                                    <p className='text-gray-400'>
                                        Vous souhaitez acheter ou louer des solutions bureautiques ?
                                    </p>
                                    <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#efefef] flex items-center max-sm:h-screen w-full justify-center snap-always snap-center">
                            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-5 py-10 gap-8'>
                                <div className='flex justify-center'>
                                    <img src="pdg.svg" className="w-[65%]" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 text-xl text-gray-400 text-center'>
                                    <h1 className='text-4xl text-black'>Erwan HECAEN</h1>
                                    <p>Fondateur et Expert Solutions Documentaires</p>
                                    <hr className='border-[#0061ad] !border-gray-400 w-full' />
                                    <p>+33 (0) 6 15 94 55 46</p>
                                    <p>e.hecaen@copycatgroup.fr</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400 ">
                            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center snap-always snap-center'>
                                <div className='flex flex-col gap-6 toFade'>
                                    <h1 className='text-4xl text-blue-800'>Ils nous font confiance !</h1>
                                    <p>Faites comme nos clients, faites-nous confiance pour notre accompagnement et la réalisation de vos projets documentaires ! Adressez-vous à notre guichet unique pour traiter vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
                                </div>
                                <div className='flex border shadow rounded-xl p-4 aspect-square lg:aspect-video toFade'>
                                    <App.Carousel images={[
                                        "https://copycatgroup.fr/images/log2.jpg",
                                        "https://copycatgroup.fr/images/log1.jpg",
                                        "https://copycatgroup.fr/images/log7.jpg",
                                        "https://copycatgroup.fr/images/log4.jpg",
                                        "https://copycatgroup.fr/images/log5.jpg",
                                        "https://copycatgroup.fr/images/log6.jpg",
                                        "https://copycatgroup.fr/images/log3.jpg",
                                    ]} className="[&_button]:bg-[#0061ad] [&_button]:rounded-full px-16 py-12" />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400 ">
                            <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
                                <div className='flex flex-col gap-6 snap-always snap-center'>
                                    <div className="grid grid-cols-2 [&_label]:grid [&_label>input]:w-full [&_label>input]:rounded-lg gap-4" style={{"textWrap": "nowrap"}}>
                                        <h1 className="text-4xl text-black col-span-2">Faites vous rappeler !</h1>
                                        <form className="contents">
                                            {[
                                                {className: null, input : <input type="text" placeholder='Nom' />},
                                                {className: null, input : <input type="text" placeholder='Prénom' />},
                                                {className: null, input : <input type="text" placeholder='Numéro de téléphone' />},
                                                {className: null, input : <input type="text" placeholder='Entreprise' />},
                                                {className: "col-span-2", input : <input type="text" placeholder='Votre email' />},
                                                {className: "col-span-2", input : <input type="text" placeholder='Sujet' />},
                                            ].map((field, id) => <label className={field.className} key={id}> {field.input.props.placeholder} {field.label} {field.input} </label> )}
                                            <button className='p-4 bg-[#0061ad] rounded-full text-white mt-2'>Envoyer</button>
                                        </form>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-6 snap-always snap-center'>
                                    <iframe className='w-full' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </App.Layout.Body>
                } />
                <Route path="/solutions" element={
                    <App.Layout.Body />
                } />
                <Route path="/shop" element={
                    <App.Layout.Body />
                } />
                <Route path="/print" element={
                    <App.Layout.Body />
                } />
                <Route path="/labs" element={
                    <App.Layout.Body />
                } />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    },

    Layout : {
        Body : ({children}) => {
            const [init, setInit] = useState(true);
            const [scrolled, setScrolled] = useState({});
            const [heightScreen, setHeightScreen] = useState();

            useEffect(() => {
                const int = setInterval(() => {
                    if (init) {
                        //console.log(document.querySelector('html').getBoundingClientRect().height);
                        setHeightScreen(screen.height);
                        setInit(false);
                    } else {
                        let count = 0;
                        document.querySelectorAll('.toFade').forEach((e, i) => {
                            if (
                                e.getBoundingClientRect().top.toFixed() < heightScreen ||
                                e.getBoundingClientRect().bottom.toFixed() < 0
                            ) {
                                setScrolled({...scrolled, [i]: e});
                                setTimeout(() => e.classList.add('visible'), 100);
                                count++;
                                console.log(count);
                            }
                        });
                        count = 0;
                    }
                }, 1000);
                return () => clearTimeout(int);
            });

            useEffect(() => {
                const int = setInterval(() => {
                    console.log(scrolled);
                }, 1000);
                return () => clearTimeout(int);
            });

            return <>
                <App.Layout.Header />
                {children}
                <App.Layout.Footer />
            </>
        },
        Header : ({}) => {
            const patternKeys = ['cover', 'logo', 'textLine1', 'textLine2', 'color'];
            const patternsValues = {};
            patternsValues['/'] = ["", 'ccg.jpg', '« Document as a Service »', 'Votre interlocuteur privilégié au service du document !', '#0061ad'];
            patternsValues['/solutions'] = ['-sol', 'sol1.png', 'Venez en profiter !', 'Audit gratuit, Bureautique, Informatique', '#09a13b'];
            patternsValues['/shop'] = ['-shop', 'ccs3.jpg', `Achetez vos fournitures, appareils informatiques, multimédia et bien plus !`, null, '#f39115'];
            patternsValues['/print'] = ['-print', 'pr1.png', `10% sur notre site CopycatPrint.fr avec le code promo COPYCAT10`, null, '#ed00b5'];
            patternsValues['/labs'] = ['-labs', 'lab1.png', `Réaliser un audit gratuit pour vos projets`, null, '#6e2380'];

            let page = location.pathname;
            const patterns = (key) => patternsValues?.[page]?.[patternKeys.indexOf((key))];
            return <div id='header' className='w-full h-screen relative flex snap-always snap-center'>
                <img src={"banner-bg"+patterns('cover')+".png"} className='w-full h-full object-cover'/>
                <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4">
                    <div className='flex flex-col justify-start items-center' id="nav">
                        <div className='flex justify-between lg:justify-between lg:gap-8 relative max-w-[1340px] w-full'>
                            <Link to="/" className='contents'><img src={"logo.png"} className="w-[20vh] max-h-[120px] aspect-[163/120] object-contain h-fit left-0 lg:mx-18" /></Link>
                            <ul className='lg:text-xl xl:text-2xl hidden lg:flex gap-6 [&>li]:cursor-pointer [&>li]:text-[#0061ad] hover:[&>li]:text-white items-center' style={{textWrap: "nowrap"}}>
                                <Link className='contents' to={"/solutions"}><li> Copycat Solutions </li></Link>
                                <Link className='contents' to={"/shop"}><li> Copycat Shop </li></Link>
                                <Link className='contents' to={"/print"}><li> Copycat Print </li></Link>
                                <Link className='contents' to={"/labs"}><li> Copycat Labs </li></Link>
                            </ul>
                            <div className='w-[20vh] max-h-[120px] aspect-[163/120] object-contain h-fit left-0 lg:mx-18 contents lg:block'>
                                <button className='block p-3 right-0 top-0 bg-white/50 h-fit rounded-md self-center lg:invisible'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <img src={patterns('logo')} className={'w-[35vh] lg:w-[350px] aspect-square h-fit rounded-full md:mt-16 object-contain'}/>
                    </div>
                    <div className='w-full text-white text-center flex flex-col justify-center text-base md:text-2xl lg:text-3xl gap-[1.5vh] lg:gap-[18px] items-center'>
                        <h2 className='max-w-[500px]'>{patterns('textLine1')}</h2>
                        <h2 className=''>{patterns('textLine2')}</h2>
                        <button className={`md:text-2xl bg-white px-4 py-2 md:px-7 md:py-3.5 rounded-full`}style={{color: `${patterns('color')}`}}>Demander une expertise</button>
                    </div>
                </div>
            </div>
        },
        Footer : ({}) => <div id='footer' className="bg-[#0061ad] gap-8 w-full grid grid-cols-1 lg:grid-cols-4 snap-always snap-end text-white p-8 [&_h2]:text-3xl [&_input]:rounded-lg [&>div]:grid [&>div]:grid-rows-[min-content] [&>div]:gap-4">
            <div>
                <h2>Contactez nous</h2>
                <ul>
                    <li><a href="/contact">01 45 07 98 00</a></li>
                    <li><a href="/contact">hello@copycatgroup.fr</a></li>
                    <li><a href="/contact">Trouver un Magasin :</a></li>
                    <li><a href="/contact">2 rue de ville d’Avray</a></li>
                    <li><a href="/contact">92310 SÈVRES</a></li>
                </ul>
            </div>
            <div>
                <h2>A propos</h2>
                <ul>
                    <li><a href="/mentions-legales">Mentions légales</a></li>
                    <li><a href="/confidentialit%C3%A9">Politique de confidentialité</a></li>
                    <li><a href="https://copycatgroup.fr/#service_1">Les Services</a></li>
                </ul>
			</div>
            <div>
                <h2>Nos autres services</h2>
                <ul>
                    <li><a href="https://copycat-shop.fr" target="_blank">Copycat Shop</a></li>
                    <li><a href="http://www.copycatprint.fr/accueil/" target="_blank">Copycat Print</a></li>
                    <li><a href="https://www.copycat.vous-livre.com/" target="_blank">Copycat vous livre</a></li>
                    <li><a href="https://copycat-group.mydigitalcorner.fr/" target="_blank">Copycat Group mydigitalcorner</a></li>
                    <li><a href="https://www.exalink.fr/profil/copycat-group" target="_blank">Exalink Copycat Group</a></li>
                </ul>
            </div>
            <div>
				<form className='contents'>
                    <h2>Newsletter</h2>
                    <div className='grid gap-2 grid-rows-[min-content]'>
                        <input type="email" id="email" pattern=".+@globex\.com" className='w-full text-black h-fit' placeholder='Votre email'/>
                        <button className='border rounded-full w-full h-fit p-2'>S'inscrire</button>
                    </div>
                </form>
			</div>
        </div>,
    },

    Carousel : ({images, className}) => <Carousel className={className}>
        {images.map((image, i) => <img key={i} alt="" src={image} className='object-contain h-full' />)}
    </Carousel>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App.Page />
        </BrowserRouter>
    </React.StrictMode>,
)