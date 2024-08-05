import React from 'react';
import styles from './Styles.module.css'

type Props = {}

const index = (props: Props) => {
  return (
    <table className=" border-300 px-10 table-fixed border-[1px] rounded-lg
    bg-slate-700 text-slate-300 min-w-full"  style={{  borderSpacing: "30px"}} >
     <thead className="h-10">
       <tr  >
         <td className="px-2 ">title</td>
         <td className="px-2">description</td>
         <td>image</td>
         <td>video</td>
         <td>video description</td>
         <td>info</td>
       </tr>
     </thead>
   </table>
  )
}

export default index