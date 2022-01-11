//Funcion constructora Consultorio
function Consultorio(nombreconsultorio, paciente){
    var _nombreconsultorio = nombreconsultorio;
    var _paciente = paciente || [];
    Object.defineProperty(this,"_getNombreconsultorio", {
        get: function(){
            return _nombreconsultorio;
        }
    });
    Object.defineProperty(this, "_setNombreconsultorio",{
        set function(nombreconsultorio){
            _nombreconsultorio = nombreconsultorio;
        }
    });
    Object.defineProperty(this,"_getPaciente", {
        get: function(){
            return _paciente;
        }
    });
    Object.defineProperty(this, "_setPaciente",{
        set function(paciente){
            _paciente = _paciente.push(paciente);
        }
    });
};
//Funcion constructora Pacientes
function Paciente(nombre, edad, rut, diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
    Object.defineProperty(this,"_getNombre", {
        get: function(){
            return _nombre;
        }
    });
    Object.defineProperty(this, "_setNombre",{
        set function(nombre){
            _nombre = nombre;
        }
    });
    Object.defineProperty(this,"_getEdad", {
        get: function(){
            return _edad;
        }
    });
    Object.defineProperty(this, "_setEdad",{
        set function(edad){
            _edad = edad;
        }
    });
    Object.defineProperty(this,"_getRut", {
        get: function(){
            return _rut;
        }
    });
    Object.defineProperty(this, "_setRut",{
        set function(rut){
            _rut = rut;
        }
    });
    Object.defineProperty(this,"_getDiagnostico", {
        get: function(){
            return _diagnostico;
        }
    });
    Object.defineProperty(this, "_setDiagnostico",{
        set function(diagnostico){
            _diagnostico = diagnostico;
        }
    });
};
//Prototipos Consultorio
Consultorio.prototype.getNombreconsultorio = function(){
    return this._getNombreconsultorio;
};
Consultorio.prototype.setNombreconsultorio = function(nombreconsultorio){
    this._setNombreconsultorio = nombreconsultorio;
};
Consultorio.prototype.getPaciente = function(){
    return this._getPaciente;
};
Consultorio.prototype.setPaciente = function(paciente){
    this._setPaciente = paciente.push(paciente);
};
//Prototype Pacientes
Paciente.prototype.getNombre = function(){
    return this._getNombre;
};
Paciente.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
};
Paciente.prototype.getEdad = function(){
    return this._getEdad;
};
Paciente.prototype.setEdad = function(edad){
    this._setEdad = edad;
};
Paciente.prototype.getRut = function(){
    return this._getRut;
};
Paciente.prototype.setRut = function(rut){
    this._setRut = rut;
};
Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico;
};
//Instancias Pacientes
var p1 = new Paciente('Juan', '38', '12334554-k', 'asma');
var p2 = new Paciente('Pedro', '23', '12345554-6', 'Resfrio');
var p3 = new Paciente('Diego', '24', '12377854-1', 'Lumbago');
//Instancias Consultorio
var c1 = new Consultorio('San Juan', [p1,p3]);
var c2 = new Consultorio ('Felix de Amesti', [p2] );


//Mostrar pacientes en consultorios
Consultorio.prototype.pacientesregistrados = function (){
    var lista = this.getPaciente();
    lista.find(function (item){
        console.log("Paciente:" + item.getNombre()+"|Edad:"+item.getEdad()+"|Rut: "+item.getRut()+"|Diagnostico:"+item.getDiagnostico());
    });
};
//Mostrar nombres de pacientes
Consultorio.prototype.nombrespacientes = function (){
    var lista = this.getPaciente();
    lista.find(function (item){
        console.log("Nombre de Paciente:" + item.getNombre());
    });
};
c1.pacientesregistrados();
c2.pacientesregistrados();
c1.nombrespacientes();
c2.nombrespacientes();
