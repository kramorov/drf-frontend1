import {useMemo} from 'react';
import {css} from '@emotion/css';
import {useTheme} from '@emotion/react';

const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' ,
};

const postStyles = {
    paper: {
        marginTop: theme.spacing ( 8 ) ,
        display: 'flex' ,
        flexDirection: 'column' ,
        alignItems: 'center' ,
    } ,
    cardMedia: {
        paddingTop: '56.25%' , // 16:9
    } ,
    link: {
        margin: theme.spacing ( 1 ,1.5 ) ,
    } ,
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700] ,
    } ,
    postTitle: {
        fontSize: '16px' ,
        textAlign: 'left' ,
    } ,
    postText: {
        display: 'flex' ,
        justifyContent: 'left' ,
        alignItems: 'baseline' ,
        fontSize: '12px' ,
        textAlign: 'left' ,
        marginBottom: theme.spacing ( 2 ) ,
    } ,
};

const useClasses = stylesElement => {
    const theme = useTheme ();
    return useMemo ( () => {
        const rawClasses = typeof stylesElement === 'function'
            ? stylesElement ( theme )
            : stylesElement;
        const prepared = {};
        Object.entries ( rawClasses ).forEach ( ([key ,value = {}]) => {
            prepared[key] = css ( value );
        } );
        console.log ( prepared )
        return prepared;
    } ,[stylesElement ,theme] );
};

const postClasses = useClasses ( postStyles ); // useStyles from custom hook
export default postClasses;
