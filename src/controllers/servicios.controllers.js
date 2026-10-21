export const prueba = (req, res)=> {
    console.log('Prueba de mi primer controlador')
    res.status(200).json({mensaje:'Primer controlador exitoso ✔'})
}