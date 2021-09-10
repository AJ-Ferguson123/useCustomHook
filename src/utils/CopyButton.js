import React from 'react'
import useCopyToClipboard from './useCopyToClipboard'
import {GrStatusGoodSmall} from 'react-icons/gr'
import {MdMoodBad} from 'react-icons/md'

export default function CopyButton({ code }) {
    const [isCopied, handleCopy] = useCopyToClipboard();

    return(
        <button onClick={() => handleCopy(code)}>
            {isCopied ? <GrStatusGoodSmall className="w-7 h-8" /> : <MdMoodBad className="w-7 h-8" /> }
        </button>
    );
}
