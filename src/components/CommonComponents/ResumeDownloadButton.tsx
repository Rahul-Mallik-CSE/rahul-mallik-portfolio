import React from 'react'
import { Button } from '../ui/button'
import { ArrowDownToLine } from 'lucide-react'

const ResumeDownloadButton = () => {
  return (
    <a href="/resume_of_rahul_mallik.pdf" download="Resume_Rahul_Mallik.pdf" className="inline-block">
                <Button  className="group inline-flex  items-center justify-center gap-2 px-6 xl:px-7 py-3 xl:py-3.5 rounded-lg border-[0.5px] border-solid border-[#95EDFF] bg-[linear-gradient(134deg,rgba(37,37,37,1)_17%,rgba(132,132,132,1)_100%)] hover:opacity-90 transition-opacity">
                  <span className="font-normal text-[#95EDFF] text-base xl:text-lg text-center leading-[21.6px] whitespace-nowrap tracking-[0]">
                    View my Resume
                  </span>{" "}
                  <ArrowDownToLine className="text-[#95EDFF]" />
                </Button>
    </a>
  )
}

export default ResumeDownloadButton
