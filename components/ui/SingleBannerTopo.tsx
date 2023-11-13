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

    return (<>
        <a href={props.link} target={props.openInNewTab ? '_blank' : 'nope'} class="relative overflow-y-hidden w-full m-auto !w-[1140px]">
            <img class="object-cover w-[100%] h-full p-0 m-0" loading={props.lcp ? "eager": "lazy"} src={props.src} alt={'ok'}/>
        </a>
    </>)

}


export default SingleBannerTopo