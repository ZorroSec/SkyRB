menu() {
    echo -e "
    l---------------------------l
    l choose one of the options l
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    l        [ 01 ] Terminal    l
    l        [ 02 ] Web         l
    l        [ 03 ] Exit        l
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    "
    read op

    case $op in
        1) ruby app/app.rb
        ;;
    esac
}

menu