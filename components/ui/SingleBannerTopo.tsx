import type { ImageWidget } from "apps/admin/widgets.ts";
// import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Props {
    src : ImageWidget,
    srcMobile : ImageWidget,
    link : string,
    lcp : boolean
}

const SingleBannerTopo = (props : Props) => {
    console.log(props.src)
    console.log(props.srcMobile)
    console.log(props.link)

    return (<>
        <img
          class="object-cover w-[1140px] h-full pl-10 pr-10"
          loading={props.lcp ? "eager": "lazy"}
          src={props.src}
          alt={'ok'}
        />
    </>)

}


export default SingleBannerTopo