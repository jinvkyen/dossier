import { useEffect } from "react";
import { useLocation } from "react-router-dom";


type Props = {
    scrollRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollToTop({scrollRef}: Props) {

    const { pathname } = useLocation();

    useEffect(()=> {
        if(scrollRef.current){
            scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
        }

    }, [pathname, scrollRef])

    return null;
}