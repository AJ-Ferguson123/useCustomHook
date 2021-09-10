import React from 'react'

export default function useDeviceDetect() {
    const [isMobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        const userAgent =
            typeof navigator ==="undefined" ? "" : navigator.userAgent;
            const mobile = Boolean(
                userAgent.match(

                )
            );
            setMobile(mobile);
    }, []);
    return { isMobile };
}