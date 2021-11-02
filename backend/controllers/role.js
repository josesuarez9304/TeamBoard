//importa para mostrar de dodne viene
import role from "../models/role.js";
//llega de la vista request y el response es lo q sta fuyncion va a devolver
//el response dice q va devovler
const registerRole = async (req, res) => {
  //necesita saber si alguno es vacio o el nombre o la descrpcion como atributos vienene en el json
  if (!req.body.name || !req.body.description) 
    //400 hay un error algo salio mal no llegaron alguno de los datos
    return res.status(400).send("Incomplete data");
  


//si vienen datos priemro validamos sino existe un rol
//va a busca por 1 solo campo q se llama nombre
//es como si estuviera en el compas o mongo llama metodos de alla 
//mongoose es mongo en backend
// el esta buscando en la tabla o coleccion rol en el atributo name el que le llego de la vista  
 //el wait ba dodne hcieamos algo de una respuestas que fuera hacer algo
//el sale de nuestra margen a buscar si mongo esta o no esta  y el espera
//hace una query  haber si esta 
const existingRole = await role.findOne({name: req.body.name});
//si ya existe manda el error
  if (existingRole) return res.status(400).send("The role already exist");
 
  //sino exite crea el esquema 
  const roleSchema = new role({
      name: req.body.name,
      description: req.body.description,
      dbStatus: true,
     
  })

  //y despuesva y lo va a guardar a otro lado 
  //coloco el await para que pueda hacerlo
//el commit tiene todo listo le confirmo con el push
  const result = await roleSchema.save();
  //si eso esta vacio osea con signod e admiracion 
   if(!result) return res.status(400).send("Failed to register role");
   
   
   return res.status(200).send({result});

};

//con este deja publico 
//no hay geter and setter 
//si es una funcion si lleva llaves
export default {registerRole};
