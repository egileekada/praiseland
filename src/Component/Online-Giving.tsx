import React, { useRef, useState } from 'react'



function Online_Giving(){

    const [copySuccess, setCopySuccess] = useState('');
    const [copySuccess2, setCopySuccess2] = useState('');
    const OfferingRef: any = useRef(null);
    const TitheRef: any = useRef(null);
  
    function offering(e: any) {
      OfferingRef.current.select();
      document.execCommand('copy');
  
      e.target.focus();
      setCopySuccess('Copied!');
    };
  
    function tithe(e: any) {
      TitheRef.current.select();
      document.execCommand('copy');
  
      e.target.focus();
      setCopySuccess2('Copied!');
    };
  
    return(
        <div style={{ marginTop:'10px', display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column' }}  >

            <h6 className='font-bold font-serif' >Offering</h6>
            <div >
                
                <p className='font-bold font-serif' >Account Name</p>

                <div style={{display:'flex', flexDirection:'row', marginTop: '-5px' }} >
                    <textarea
                        ref={OfferingRef}
                        value='aaaaaaaaaa'
                        className='font-bold font-serif'
                        style={{height:'30px', width:'100px'}}
                    />
                    {
                        /* Logical shortcut for only displaying the 
                        button if the copy command exists */
                        document.queryCommandSupported('copy') &&
                        <div>
                            <button style={{marginLeft:'20px', marginRight: '10px'}} className='font-bold font-serif' onClick={offering}>Copy</button> 
                            {copySuccess}
                        </div>
                    }         
                </div>
            </div >

            <h6 className='font-bold font-serif' style={{marginTop: '20px'}} >Tithe</h6>
            <div >
                
                <p className='font-bold font-serif' >Account Name</p>
                
                <div style={{display:'flex', flexDirection:'row', marginTop:'-5px' }} >
                
                    <textarea
                    ref={TitheRef}
                    value='xxxxxxxxxx'
                    className='font-bold font-serif'
                    style={{height:'30px', width:'100px'}}/>
                    {
                    /* Logical shortcut for only displaying the 
                        button if the copy command exists */
                    document.queryCommandSupported('copy') &&
                    <div>
                        <button className='font-bold font-serif' style={{marginLeft:'20px', marginRight: '10px'}} onClick={tithe}>Copy</button> 
                        {copySuccess2}
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
    
}

export default Online_Giving