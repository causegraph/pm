/**
 * TODO: I need something better than this. Manually changing template is
 * very inconvenient :(. Should it be defined with metadata?
 */
import dbpedia from './dbpedia.jsx';
import wikidata from './wikidata.jsx'

import defaultTempalte from './default.jsx';

export default {
    dbpedia: dbpedia,
    wikidata: wikidata,
    default: defaultTempalte
}
