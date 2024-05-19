'use client';
import { useEffect, useState } from "react";
import Trash from "@/components/icons/Trash"
import toast from "react-hot-toast";

export default function FormPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [info, setInfo] = useState([]);
    const [show,setShow] = useState(false);
    const [editedInfo, setEditedInfo] = useState(null);
    useEffect(()=>{
      fetchInfo();
    },[]);

    function fetchInfo() {
       fetch('/api/manager').then(res => {
        res.json().then(info => {
            setInfo(info);
        });
       });
    }

    async function handlePassword(ev) {
        ev.preventDefault();
        const creationPromise = new Promise(async(resolve,reject)=>{
         const data = {userName,password}
         if(editedInfo) {
            data._id=editedInfo._id;
         }
            const response = await fetch('/api/manager', {
               method: editedInfo ? 'PUT':'POST' ,
               headers: {'Content-Type':'application/json'},
               body: JSON.stringify(data),
            });
            setUserName('');
            setPassword('');
            fetchInfo();
            setEditedInfo(null);
            if(response.ok)
                resolve();
            else
               reject();
        });
        await toast.promise(creationPromise, {
            loading:editedInfo? 'Creating your new Credentials' : 'Update Credentials',
            success:editedInfo? 'New Credentials Created':'Credentials Updated',
            error:'Error, sorry...'
        });
    }

    async function handleDeleteClick(_id) {
        const promise = new Promise(async(resolve,reject) => {
          const response = await fetch('/api/manager?_id='+_id, {
               method: 'DELETE',
          }); 
          if(response.ok) {
            resolve();
          } else {
            reject();
          }
        });

        await toast.promise(promise,{
           loading: 'Deleting....',
           success: 'Deleted',
           error: 'Error',

        });
        fetchInfo();
    }
    return (
       <section className="mt-8 max-w-2xl mx-auto">
          <form className="mx-16" onSubmit={handlePassword}>
            <div className="mb-4">
            <label className="text-[16px] my-2">
                 {editedInfo ? 'Update UseName':'New UserName'}
                 {editedInfo && (
                  <>: <b>{editedInfo.userName}</b></>
                 )}
            </label>
            <input type="text" value={userName} placeholder="Username" className="mt-2" onChange={ev => setUserName(ev.target.value)}/>
            </div>
            <div className="my-4">
            <label className="text-[16px] my-2">
                 {editedInfo ? 'Update Password':'New Password'}
            </label>
            <input type="password" value={password} placeholder="Password" className="mt-2" onChange={ev => setPassword(ev.target.value)}/>
            </div>
            <button className="border p-2 px-24 md:px-36 rounded-lg w-full text-center font-semibold bg-green-400 mt-2 " type="submit">
                {editedInfo ? 'Update':'Create'}
            </button>
            <button 
                  className="border p-2 px-24 md:px-36 rounded-lg w-full text-center font-semibold bg-white mt-2 "
                  type="button" 
                  onClick={() => {
                     setEditedInfo(null);
                     setUserName('');
                     setPassword('');
                  }}>
                     Cancel
               </button>
          </form>
          <div className="mt-8">
           <h2 classsName="mt-8 text-sm text-gray-500">Existing Credentials:</h2>
            {info?.length > 0 && info.map( i => (
                <div
                  key={i._id}
                  className="bg-gray-100 rounded-xl p-2 px-4 flex gap-1 mb-1 items-center justify between">
                   <div
                    className="grid grid-cols-2 gap-36 md:grow md:gap-4">
                     <div>
                       {i.userName}
                     </div>
                     <div className="">
                        {i.password}
                     </div>
                   </div>
                   <div className="flex gap-2">
                  <button 
                     type="button"
                     onClick={()=>{
                        setEditedInfo(i);
                        setUserName(i.userName);
                        setPassword(i.password);
                     }}
                     className="border border-black rounded-lg p-2"
                  >
                        Edit
                  </button>
                     <button onClick={()=>handleDeleteClick(i._id)} className="border border-black p-1 rounded-lg">
                        <Trash/>
                     </button>
                  </div>
                </div>
            ))}
          </div>
       </section>
    );
}