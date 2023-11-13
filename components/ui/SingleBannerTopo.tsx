import type { ImageWidget } from "apps/admin/widgets.ts";
// import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Props {
    src : ImageWidget,
    srcMobile : ImageWidget,
    link : string,
    lcp : boolean,
    openInNewTab : boolean
}

const SingleBannerTopo = (props : Props) => {

    console.log(props.src)
    console.log(props.srcMobile)
    console.log(props.link)

    // setIsMobile(window.innerWidth < 768 ? true : false)
    // const mobileMargin = isMobile ? 'mt-20' : ''

    return (<>
        <a href={props.link} target={props.openInNewTab ? '_blank' : 'nope'} class={`relative overflow-y-hidden w-full m-auto !w-[1140px]`}>
            <picture>
                <source media="(min-width: 769px)" srcset={props.src} />
                <source media="(max-width: 768px)" srcset={props.srcMobile} />
                <img class={`object-cover w-[100%] h-full p-0 lg:mt-60`} loading={props.lcp ? "eager": "lazy"} src={props.src} alt={'ok'}/>
            </picture>        
        </a>
    </>)
}


export default SingleBannerTopo