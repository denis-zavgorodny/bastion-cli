module.exports = [
    {
        name: 'host',
        description: 'SSH Host',
        type: 'string',
        required: true
    },
    {
        name: 'login',
        description: 'SSH login',
        type: 'string',
        required: true
    },
    {
        name: 'port',
        description: 'SSH Port',
        type: 'integer',
        required: true,
        default: 22
    }
];
