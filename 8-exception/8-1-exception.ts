
// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string{
  if(fileName === 'not exist!'){
    throw new Error(`file not found! ${fileName}`);
  }
  return 'file contests';
}

function closeFile(fileName:string){

}

const fileName = 'not exist!';

try{
  console.log(readFile(fileName));
}catch(e){
  console.log('catched!');  
}finally{
  closeFile(fileName);
  console.log('finally');  
}



