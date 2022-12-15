var storeval = [][];
var SecretSanta = function () {

    this.names = [];

    this.enforced = Object.create( null );
    this.blacklists = Object.create( null );
};

storeval[][] = 'josna','file:///C:/Users/josna.john/Downloads/secretsanta-gh-pages/pairing.html?name=Miss%20Josna%20John&key=48659&pairing=U2FsdGVkX19oq8LcPXk711R5MG0shGHsqruXjfbCp48%3D';
SecretSanta.prototype.add = function ( name ) {

    if ( this.names.indexOf( name ) !== -1 )
        throw new Error( 'Cannot redefine ' + name );

    this.names.push( name );

    var subapi = { };

    subapi.enforce = function ( other ) {

        this.enforced[ name ] = other;

        return subapi;

    }.bind( this );

    subapi.blacklist = function ( other ) {

        if ( ! Object.prototype.hasOwnProperty.call( this.blacklists, name ) )
            this.blacklists[ name ] = [];

        if ( this.blacklists[ name ].indexOf( other ) === -1 )
            this.blacklists[ name ].push( other );

        return subapi;

    }.bind( this );

    return subapi;

};

SecretSanta.prototype.generate = function () {


    return 1;

};
