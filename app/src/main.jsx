/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useRef, useState } from 'react'
import env from './env';
import ReactDOM from 'react-dom/client'
import './index.css'
import { Carousel } from 'flowbite-react';
import { BrowserRouter, Routes, Route, Navigate, Link, useParams, redirect, useNavigate, useLocation } from 'react-router-dom';
document.querySelector('#root').classList = 'flex flex-col items-center gap-12';
document.querySelector('html').classList = 'scroll-smooth';
let page = location.pathname.replace(env.ROOT_DIR, '');
page = (page === "") ? "/" : page;

const patternKeys = ['cover', 'logo', 'textLine1', 'textLine2', 'color', 'textLine3', 'textBtn'];
const patterns = (key, page_ = null) => ({
    ['/'] : [
        "", '/ccg.jpg', '« Document as a Service »', 'Votre interlocuteur privilégié au service du document !', '#0061ad', null, 'Demandez une expertise'
    ],
    ['/solutions'] : [
        '-sol', '/sol1.png', 'Venez en profiter !', 'Audit gratuit, Bureautique, Informatique', '#09a13b', "Fort de notre capacité à sélectionner les meilleurs acteurs du marché pour vous accompagner dans l'ensemble de vos projets, COPYCAT SOLUTIONS vous offre un panel de services sur-mesure avec possibilité de maintenance et support", 'Demandez une expertise'
    ],
    ['/shop'] : [
        '-shop', '/ccs3.jpg', `Achetez vos fournitures, appareils informatiques, multimédia et bien plus !`, null, '#f39115', "COPYCAT SHOP regroupe des fournitures en tout genre à des prix imbattables", 'Commandez en ligne'
    ],
    ['/print'] : [
        '-print', '/pr1.png', `10% sur notre site CopycatPrint.fr avec le code promo COPYCAT10`, null, '#ed00b5', "COPYCAT PRINT est capable de vous accompagner sur l'ensemble de vos projets sur-mesure. De la carte de visite à la vitrophanie, jusqu'aux objets personnalisés", 'Imprimez vos documents'
    ],
    ['/labs'] : [
        '-labs', '/lab1.png', `Réaliser un audit gratuit pour vos projets`, null, '#6e2380', "COPYCAT LABS est un adepte des technologies de programmons et de la compréhension globale du système informatique dans lequel nous évoluons, ainsi que la compétence des outils graphique pour vous accompagner au mieux dans vos projets de création", 'Contactez nous'
    ],
    ['/about'] : [
        "", '/ccg.jpg', '« Document as a Service »', 'Votre interlocuteur privilégié au service du document !', '#0061ad', null, 'Demandez une expertise'
    ],
    ['/sevres'] : [
        "", '/ccg.jpg', '« Document as a Service »', 'Votre interlocuteur privilégié au service du document !', '#0061ad', null, 'Demandez une expertise'
    ]
})?.[page_ ?? page]?.[patternKeys.indexOf((key))];


const App = {
    Components : {},
    Pages : {},
    Layout : {},
    Page : ({}) => {   
        return (<>
            <style>{`body{background:rgba(0,0,0,0.025);--thickness: 3px} .colorPage{background-color: var(--page-color);}`}</style>
            {false && <div className='opacity-50 bg-black md:bg-red-500 lg:bg-blue-500 xl:bg-teal-500 fixed w-screen h-screen z-50'></div>}
            <Routes>
                <Route path={env.ROOT_DIR+"/"} element={<App.Pages.Home color={"#0061ad"} />} />
                <Route path={env.ROOT_DIR+"/solutions"} element={<App.Pages.Solutions color={"#09a13b"} />} />
                <Route path={env.ROOT_DIR+"/shop"} element={<App.Pages.Shop color={'#f39115'} />} />
                <Route path={env.ROOT_DIR+"/print"} element={<App.Pages.Print color={'#ed00b5'} />} />
                <Route path={env.ROOT_DIR+"/labs"} element={<App.Pages.Labs color={'#6e2380'} />} />
                <Route path={env.ROOT_DIR+"/about"} element={<App.Pages.About color={'#0061ad'} alt={true} />} />
                <Route path={env.ROOT_DIR+"/sevres"} element={<App.Pages.About color={'#0061ad'} alt={true} />} />
                <Route path={"*"} element={<Navigate to={env.ROOT_DIR+"/"} />} />
            </Routes>
        </>)
    },
};

App.Layout.Body = ({children, alt = false}) => {
    const [init, setInit] = useState(true);
    const [scrolled, setScrolled] = useState({});
    const [heightScreen, setHeightScreen] = useState();

    useEffect(() => {
        scrollTo(0, 0);
        // window.onload = () => {
        //     const hash = new URL(location.href).hash;
        //     if (hash !== "") {
        //         const hashElement = document.querySelector(hash).getBoundingClientRect();
        //         scrollTo(0, hashElement.y + (hashElement.height / 2));
        //     }
        // }
        window.onscroll = function() {
            var page = document.body.getBoundingClientRect();
            [...document.querySelectorAll('.toFade')].map((e, i) => {
                const rect = e.getBoundingClientRect();
                if ((page.height/2)+100 >= rect.top+(rect.height/2) && !(e.classList.contains('appears'))) {
                    e.classList.add('appears');
                }
            });
        }
    })

    return <>
        {!alt && <App.Layout.Header />}
        {alt && <App.Layout.Header2 />}
        {children}
        <App.Layout.Footer />
    </>
}

App.Layout.Header = ({}) => {
    let path = useLocation();
    path = path.pathname.replace(env.ROOT_DIR, '');
    return <>
        <div id='header' className={`w-full h-screen relative flex snap-always snap-center bg-[${patterns('color', path)}]`}>
            <img src={"/banner-bg"+patterns('cover', path)+".png"} className='w-full h-full object-cover'/>
            <div className="absolute w-full h-full flex flex-col [&>*]:h-full gap-4 p-8 lg:p-4">
                <App.Components.Nav />
                <div className='w-full flex justify-center header_Plate'>
                    <img src={patterns('logo', path)} className={'w-[35vh] lg:w-[350px] aspect-square h-fit rounded-full md:mt-16 object-contain'}/>
                </div>
                <div className='w-full text-white text-center flex flex-col justify-center text-base md:text-2xl lg:text-3xl gap-[1.5vh] lg:gap-[18px] items-center header_Plate'>
                    <h2 className='max-w-[500px]'>{patterns('textLine1', path)}</h2>
                    <h2 className=''>{patterns('textLine2', path)}</h2>
                    <button className={`md:text-2xl bg-white px-4 py-2 md:px-7 md:py-3.5 rounded-full`}style={{color: `${patterns('color', path)}`}}>{patterns('textBtn', path)}</button>
                </div>
            </div>
        </div>
        {patterns('textLine3', path) && <div className={`-mt-12 text-white w-full flex justify-center p-16 pt-8 text-xl md:text-3xl lg:text-4xl text-center snap-end`} style={{background: `${patterns('color', path)}`}}>
            {`${patterns('textLine3')}`}
        </div>}
    </>
}

App.Layout.Header2 = ({}) => {
    return <>
        <div id='header' className={`w-full h-screen relative flex snap-always snap-center bg-[${patterns('color')}]`}>
            <img src={"/banner-ccg.jpg"} className='w-full h-full object-cover'/>
            <div className="absolute w-full h-full flex flex-col md:gap-8 p-8 lg:p-4">
                <App.Components.Nav />
                <div className='text-white text-sm md:text-xl lg:text-2xl flex flex-col gap-2 max-w-[75%] mx-auto my-8 overflow-auto'>
                    <h1 className='text-4xl'>A propos de Copycat Group</h1>
                    <p>Avec des valeurs hautes en couleurs, Copycat Group se démarque sur le marché du document grace à un soin tout particulier apporté à notre relationnel ou encore au respect des valeurs importantes telles que la reforestation. Vous servir de la meilleure des façons reste notre objectif numéro un ! Nous développons constamment de nouveaux projets, suivons l'évolution des solutions digitales et de l'innovation du print.... Nous vous guidons pas à pas, toujours dans le respect de notre crédo :
                    " Document as a Service "</p>
                </div>
            </div>
        </div>
        {patterns('textLine3') && <div className={`-mt-12 text-white w-full flex justify-center p-16 pt-8 text-xl md:text-3xl lg:text-4xl text-center snap-start`} style={{background: `${patterns('color')}`}}>
            {`${patterns('textLine3')}`}
        </div>}
    </>
}

App.Layout.Footer = ({}) => <div id='footer' className="bg-[#0061ad] gap-8 w-full grid grid-cols-1 lg:grid-cols-4 snap-always snap-end text-white p-8 [&_h2]:text-3xl [&_input]:rounded-lg [&>div]:grid [&>div]:grid-rows-[min-content] [&>div]:gap-4 snap-center max-sm:gap-[2.5vh] max-sm:h-screen">
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
</div>

App.Pages.Home = ({color}) => <App.Layout.Body>
    <style>{`body{--page-color: ${color};}`}</style>
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
                    <img src="/Solutions.svg" className="h-[200px] aspect-square w-fit" />
                    <span>COPYCAT SOLUTIONS</span>
                </div>
                <p className='text-gray-400'>
                    Vous souhaitez acheter ou louer des solutions bureautiques ?
                </p>
                <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
            </div>
            <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                <div className="flex flex-col gap-2">
                    <img src="/Shop.svg" className="h-[200px] aspect-square w-fit" />
                    <span>COPYCAT SOLUTIONS</span>
                </div>
                <p className='text-gray-400'>
                    Vous souhaitez acheter ou louer des solutions bureautiques ?
                </p>
                <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
            </div>
            <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                <div className="flex flex-col gap-2">
                    <img src="/Print.svg" className="h-[200px] aspect-square w-fit" />
                    <span>COPYCAT SOLUTIONS</span>
                </div>
                <p className='text-gray-400'>
                    Vous souhaitez acheter ou louer des solutions bureautiques ?
                </p>
                <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
            </div>
            <div className='flex flex-col gap-4 items-center snap-always snap-center toFade'>
                <div className="flex flex-col gap-2">
                    <img src="/Labs.svg" className="h-[200px] aspect-square w-fit" />
                    <span>COPYCAT SOLUTIONS</span>
                </div>
                <p className='text-gray-400'>
                    Vous souhaitez acheter ou louer des solutions bureautiques ?
                </p>
                <button className='text-white bg-[#0061ad] px-4 py-2 md:px-7 md:py-3.5 rounded-full'>Demander une expertise</button>
            </div>
        </div>
    </div>
    <div className="bg-[#efefef] flex items-center max-sm:h-screen w-full justify-center snap-always snap-center toFade">
        <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-5 py-10 gap-8'>
            <div className='flex justify-center'>
                <img src="/pdg.svg" className="w-[65%]" />
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
    <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
        <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
            <div className='flex flex-col gap-6 toFade snap-always snap-center toFade'>
                <h1 className='text-4xl text-blue-800'>Ils nous font confiance !</h1>
                <p>Faites comme nos clients, faites-nous confiance pour notre accompagnement et la réalisation de vos projets documentaires ! Adressez-vous à notre guichet unique pour traiter vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
            </div>
            <div className='flex border shadow rounded-xl p-4 aspect-square lg:aspect-video snap-always snap-center toFade'>
                <App.Components.Carousel images={[
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
    <div className="flex w-full justify-center text-center md:text-left text-base md:text-xl text-gray-400">
        <div className='max-w-[1340px] flex flex-col lg:flex-row w-full [&>div]:w-full px-12 gap-8 items-center'>
            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
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
            <div className='flex flex-col gap-6 snap-always snap-center toFade'>
                <iframe className='w-full' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </div>
    </div>
</App.Layout.Body>;

App.Pages.Solutions = ({color}) => {
    return (
        <App.Layout.Body>
            <style>{`body{--page-color: ${color};}`}</style>
            <App.Components.Timeline color={color} list={[
                //{image: "", texte: "", button: "",},
                {image: "https://copycatgroup.fr/images/bur1.png", id: "bur", text: <>{`Vente et location d'imprimante`}<br />{`Petit et grand format, laser ou jet d'encre...`}</>, button: "Je suis intéressé",},
                {image: "https://copycatgroup.fr/images/tel1.png", id: "tel", text: <>{`Téléphones fixes, mobiles, internet...`}</>, button: "Je suis intéressé",},
                {image: "https://copycatgroup.fr/images/dig1.png", id: "dig", text: <>{`Archivage, dématérialisation des factures, note de frais...`}</>, button: "Je suis intéressé",},
                {image: "https://copycatgroup.fr/images/inf1.png", id: "inf", text: <>{`Vente, maintenance, infogérance`}</>, button: "Je suis intéressé",},
            ]} />
        </App.Layout.Body>
    )
};

App.Pages.Shop = ({color}) => <App.Layout.Body>
    <style>{`body{--page-color: ${color};}`}</style>
    <App.Components.Timeline color={color} list={[
        //{image: "", texte: "", button: "",},
        {image: "https://copycatgroup.fr/images/pc1.png", text: <>{`Ordinateur, clé USB, souris, clavier, câble HDMI...`}</>, button: "Je suis intéressé",},
        {image: "https://copycatgroup.fr/images/mu1.png", text: <>{`Vidéo projecteur, écran interactif, visioconférence`}</>, button: "Je suis intéressé",},
        {image: "https://copycatgroup.fr/images/bu1.png", text: <>{`Imprimante domestique, toner, agenda, papier, stylo...`}</>, button: "Je suis intéressé",},
        {image: "https://copycatgroup.fr/images/div1.png", text: <>{`Loisirs, gastronomie, restauration, hygiène..`}</>, button: "Je suis intéressé",},
    ]} />
    <div className='grid grid-cols-1 gap-4 text-center'>
        <span className='text-4xl snap-center'>Vous avez d'autres besoins ?</span>
        <div className='flex max-md:flex-col justify-center gap-4 max-md:text-xl text-2xl [&>*]:w-full w-full max-w-[1024px] px-4' name='ee' style={{wordBreak: "break-word"}}>
            <div className='aspect-[4/3] bg-[#f39115] max-h-[400px] w-min grid grid-rows-[min-content] items-center text-center snap-always snap-center'>
                <div className='aspect-[2/1] bg-gray-900 w-full'></div>
                <div className='text-white p-4'>Commandez vos fournitures bureautiques</div>
            </div>
            <div className='aspect-[4/3] bg-[#f39115] max-h-[400px] w-min grid grid-rows-[min-content] items-center text-center snap-always snap-center'>
                <div className='aspect-[2/1] bg-gray-900 w-full'></div>
                <div className='text-white p-4'>Commandez vos appareils multimédia</div>
            </div>
            <div className='aspect-[4/3] bg-[#f39115] max-h-[400px] w-min grid grid-rows-[min-content] items-center text-center snap-always snap-center'>
                <div className='aspect-[2/1] bg-gray-900 w-full'></div>
                <div className='text-white p-4'>Commandez vos appareils et solutions informatiques</div>
            </div>
        </div>
    </div>
</App.Layout.Body>;

App.Pages.Print = ({color}) => <App.Layout.Body>
    <style>{`body{--page-color: ${color};}`}</style>
    <App.Components.Timeline color={color} list={[
        //{image: "", texte: "", button: "",},
        {image: "https://copycatgroup.fr/images/rep1.png", text: <>{`Reliure, plastification, flyer..`}</>, button: "Je suis intéressé",},
        {image: "https://copycatgroup.fr/images/mug.png", text: <>{`Mugs, vêtements, stylos, clés USB...`}</>, button: "Je suis intéressé",},
        {image: "https://copycatgroup.fr/images/sup1.png", text: <>{`Roll'up, drapeaux, vitrophanie...`}</>, button: "Je suis intéressé",},
    ]} />
    <iframe src="https://e.issuu.com/embed.html?d=catalogue_produits_en_marque_blanche&u=e3m4" className='w-full aspect-[4/3] max-w-[1024px] max-md:h-screen snap-center'></iframe>
    <div className='grid grid-cols-1 text-4xl gap-4 text-center'>
        <span>Une partie de nos impressions en ligne sur :</span>
        <Link to={'http://www.copycatprint.fr/accueil/'} style={{color: color}}>www.copycatprint.fr</Link>
    </div>
</App.Layout.Body>;

App.Pages.Labs = ({color}) => <App.Layout.Body>
    <style>{`body{--page-color: ${color};}`}</style>
    <App.Components.Timeline color={color} list={[
        //{image: "", texte: "", button: "",},
        {image: "https://copycatgroup.fr/images/dev1.png", text: <>
            {`Programmation, développement de site sur-mesure`}
            <div className='grid grid-cols-3 [&>img]:aspect-square [&>img]:w-full [&>img]:h-fit p-4 gap-4 [&>img]:rounded-2xl [&>img]:object-contain'>
                <img src="https://copycatgroup.fr/images/php.png"></img>
                <img src="https://copycatgroup.fr/images/js.png"></img>
                <img src="https://copycatgroup.fr/images/wp.jpg"></img>
                <img src="https://copycatgroup.fr/images/git.svg"></img>
                <img src="https://copycatgroup.fr/images/an.svg"></img>
            </div>
        </>, button: "Je suis intéressé", id: "dev",},
        {image: "https://copycatgroup.fr/images/gra1.png", text: <>
            {`Identité visuelle, communication visuelle, logo...`}
            <div className='grid grid-cols-3 [&>img]:aspect-square [&>img]:w-full [&>img]:h-fit p-4 gap-4 [&>img]:rounded-2xl [&>img]:object-contain'>
                <img src="https://copycatgroup.fr/images/ps.png"/><img src="https://copycatgroup.fr/images/id.png"/><img src="https://copycatgroup.fr/images/ai.png"/><img src="https://copycatgroup.fr/images/xd.png"/>
            </div>
        </>, button: "Je suis intéressé", id: "gra",},
    ]} />
</App.Layout.Body>,

App.Pages.About = ({color}) => <App.Layout.Body alt={true}>
    <style>{`body{--page-color: ${color};}`}</style>
</App.Layout.Body>,

App.Components.Carousel = ({images, className}) => <Carousel className={className}>
    {images.map((image, i) => <img key={i} alt="" src={image} className='object-contain h-full' />)}
</Carousel>;

App.Components.Timeline = ({color, list}) => {
    const timeline = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const hr = function () {
            //[...timeline.current.querySelectorAll('.container.right')].map((item) => { item.style.top = "-" + (0.75 * item.getBoundingClientRect().height) + "px"; });
            const whole = timeline.current?.getBoundingClientRect();
            // eslint-disable-next-line no-unsafe-optional-chaining
            const last = [...(timeline.current ?? document).querySelectorAll('.ligacao')].pop()?.getBoundingClientRect();
            timeline.current?.style.setProperty("--x", (whole.bottom-last.bottom) + "px", "");
        }
        hr();
        document.onreadystatechange = function(e) { if (document.readyState === 'complete') { hr(); window.scroll(0,0); } };
        window.addEventListener('load', hr);
        window.addEventListener('scroll', hr);
        window.addEventListener('resize', hr);
        if (location.hash) {
            window.scroll(
                0,
                document
                .querySelector(location.hash)
                .getBoundingClientRect()
                .top
            )
        }
    }, [])
    
    return <div ref={timeline} className={`timeline !-mt-12 pt-12 w-full max-w-[1340px] [&_img]:drop-shadow-xl text-center`}>
        {list.map((element, i) => <div id={element.id} className={"max-sm:!top-0 container "+(i % 2 === 0 ? "left" : "right")} key={i}>
            <div className="content grid grid-cols-1 grid-rows-[min-content] gap-8 text-2xl snap-start">
                <div className='relative grid'>
                    <div className={`hr absolute w-full`}>
                        <div className='inner'>
                            <div className={`ligacao`}></div>
                        </div>
                    </div>
                    <img src={element.image} className='bg-white rounded-full w-full z-10 relative justify-self-center' alt=""></img>
                </div>
                <p className='text-gray-400'>{element.text}</p>
                <button className={`colorPage p-4 drop-shadow-xl rounded-full text-white`}>{element.button}</button>
            </div>
        </div>)}
    </div>
};

App.Components.Nav = ({}) => {
    const navigate = useNavigate();
    const links = [
        {path: "/solutions", text: "Copycat Solutions", dropdown: [
            {path: "/solutions#bur", title: "Bureautique", text: "Analyse Financière, Vente et location, Rachat de contrat..."},
            {path: "/solutions#tel", title: "Téléphonie", text: "Téléphone Fixes, Mobiles, Internet..."},
            {path: "/solutions#dig", title: "Digital", text: "Archivage, Dématérialisation de factures, Note de frais..."},
            {path: "/solutions#inf", title: "Informatique", text: "Vente maintenance, Infogérance..."},
        ]},
        {path: "/shop", text: "Copycat Shop", dropdown: [
            {path: "/shop", title: "Informatique", text: "Ordinateur, Clé USB, Souris, Clavier, Câble HDMI..."},
            {path: "/shop", title: "IT / Multimédia", text: "Vidéo projecteur, écran interactif, Visio conférence..."},
            {path: "/shop", title: "Bureautique", text: "Imprimante domestique, Toner, Agenda, Papier, Stylo..."},
            {path: "/shop", title: "Divers", text: "Loisirs, Gastronomie et Restauration, Hygiène.."},
        ]},
        {path: "/print", text: "Copycat Print", dropdown: [
            {path: "/print", title: "Reprographie / Imprimerie", text: "Reliure, Plastification, Flyer..."},
            {path: "/print", title: "Objet Personnalisé", text: "Mug, Vêtement, Stylo, Clé usb..."},
            {path: "/print", title: "Support PLV", text: "Roll’up, Drapeau, Vitrophanie.."},
        ]},
        {path: "/labs", text: "Copycat Labs", dropdown: [
            {path: "/labs#dev", title: "Développement Web", text: "Développement de site sur-mesure, Programmation..."},
            {path: "/labs#gra", title: "Graphisme", text: "Identité visuelle, Communication visuelle, Logo..."},
        ]},
        {path: "/about", text: "En savoir plus", dropdown: [
            {path: "/about", title: "A propos", text: ""},
            {path: "/about", title: "Boutique", text: ""},
            {path: "/about", title: "Formulaire de contact", text: ""},
            {path: "/about", title: "Politique RSE", text: ""},
        ]},
    ]

    return <div className='flex flex-col justify-start items-center' id="nav">
        <div className='flex justify-between lg:justify-between lg:gap-8 relative max-w-[1340px] w-full'>
            <Link to={env.ROOT_DIR+"/"} className='contents'><img src={"/logo.png"} className="w-[20vh] max-h-[120px] aspect-[163/120] object-contain h-fit left-0 lg:mx-18" /></Link>
            <ul id='navpills' className='text-2xl lg:text-xl xl:text-2xl hidden lg:flex gap-[.5vw] md:[&_li]:cursor-pointer [&>a]:text-[#0061ad] items-start [&_li]:p-2 z-50' style={{textWrap: "nowrap"}}>
                {links.map((li, i) => 
                    <li className={`[&:not(:hover)]:!text-[#0061ad] lg:[&:hover_.dropdown]:block lg:[&:hover_.dropdown]:animate-[fade-in_0.2s_ease-in-out_forwards]`} key={i} style={{color: patterns('color', li.path)}}>
                        <Link className='hover:bg-white/5' to={env.ROOT_DIR+li.path} reloadDocument>{li.text}</Link>
                        <div className='dropdown [li>&]:hidden hover:block absolute py-4'>
                            <div className={`bg-white rounded-md z-50 drop-shadow-md`} style={{color: patterns('color', li.path)}}>
                                {li.dropdown.map((dropdownLi, i) => <Link onClick={() => {
                                    if(env.ROOT_DIR+dropdownLi.path !== location.pathname) { navigate(env.ROOT_DIR+dropdownLi.path); } else {
                                        document.querySelector('#navpills').classList.remove('mobile');
                                        document.querySelector('#navpills_decl').classList.remove('close');
                                    }
                                }} to={env.ROOT_DIR+dropdownLi.path} key={i} reloadDocument className='block p-4 hover:bg-black/5 [.dropdown>div>a:first-child>&]:rounded-t-lg [.dropdown>div>a:last-child>&]:rounded-b-lg'>
                                    <div className="grid grid-cols-1 grid-rows-[min-content] p-1">
                                        <div>{dropdownLi.title}</div>
                                        <div className='text-base'>{dropdownLi.text}</div>
                                    </div>    
                                </Link>)}
                            </div>
                        </div>
                    </li>)}
            </ul>
            <div className='w-[20vh] max-h-[120px] aspect-[163/120] object-contain h-fit left-0 lg:mx-18 contents lg:block'>
                <button id='navpills_decl' className='block p-3 m-2 right-0 top-0 bg-transparent h-fit rounded-md self-center opacity lg:invisible lg:opacity-0 transition-none z-50' onClick={(e) => {
                    document.querySelector('#navpills').classList.toggle('mobile');
                    document.querySelector('#navpills_decl').classList.toggle('close');
                }}>
                    <svg className='[.close>&]:hidden' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
                    <svg className='hidden [.close>&]:block text-red-500' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/> </svg>
                </button>
            </div>
        </div>
    </div>
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App.Page />
        </BrowserRouter>
    </React.StrictMode>,
)