export default (mappings: any, resource: any) => {
    Object.keys(mappings).forEach(oldKey =>  delete Object.assign(resource, {[mappings[oldKey]]: resource[oldKey] })[oldKey]);
    return resource;
};
