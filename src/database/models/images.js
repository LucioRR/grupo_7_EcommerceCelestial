module.exports = (sequelize, DataTypes) => {

    let alias = 'Image';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }  
    
    let config = {
        tableName: 'images',
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = function(models){
        Image.belongsToMany(models.Product, {
            as: 'products',
            through: 'imagesProducts',
            foreignKey: 'image',
            otherKey: 'product',
            timestamps: false
        });

        Image.hasMany(models.User, {    
            as: 'avatar', 
            foreignKey: 'avatar',
            })
        
    }
    return Image;
}