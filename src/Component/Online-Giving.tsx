import React from 'react'



function Online_Giving(){

    const [copySuccess, setCopySuccess] = React.useState('');
    const [copySuccess2, setCopySuccess2] = React.useState('');
    const OfferingRef: any = React.useRef(null);
    const TitheRef: any = React.useRef(null);
  
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

            <h6 className='font-bold font-Poppinsbold text-xl' >Offering</h6>
            <div style={{ display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column' }}>
                
                <p className='font-bold font-Poppinsbold text-md' >Account Name</p>

                <div style={{display:'flex', flexDirection:'row', marginTop: '-5px' }} >
                    <textarea
                        ref={OfferingRef}
                        value='aaaaaaaaaa'
                        className='font-Poppins '
                        style={{height:'30px', width:'150px'}}
                    />
                    {
                        /* Logical shortcut for only displaying the 
                        button if the copy command exists */
                        document.queryCommandSupported('copy') &&
                        <div>
                            <button style={{marginLeft:'40px', marginRight: '10px'}} className='font-Poppinsbold' onClick={offering}>Copy</button> 
                            {copySuccess}
                        </div>
                    }         
                </div>
            </div >

            <h6 className='font-bold font-Poppinsbold text-xl' style={{marginTop: '20px'}} >Tithe</h6>
            <div style={{ display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column' }} >
                
                <p className='font-bold font-Poppinsbold text-md' >Account Name</p>
                
                <div style={{display:'flex', flexDirection:'row', marginTop:'-5px' }} >
                
                    <textarea
                    ref={TitheRef}
                    value='cccccccccc'
                    className='font-Poppins'
                    style={{height:'30px', width:'150px'}}/>
                    {
                    /* Logical shortcut for only displaying the 
                        button if the copy command exists */
                    document.queryCommandSupported('copy') &&
                    <div>
                        <button className='font-Poppinsbold' style={{marginLeft:'40px', marginRight: '10px'}} onClick={tithe}>Copy</button> 
                        {copySuccess2}
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
    
}

export default Online_Giving