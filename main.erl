#!/usr/bin/env escript
%% -*- erlang -*-
%%! -smp enable -sname factorial -mnesia debug verbose
main([String]) ->
    try
        CSV = csv:parse_file(String),
        F =solarSystem:process_csv(CSV),
        print_list(F)
    catch
        A:B -> io:format("~w : ~w~n",[A,B]),
            usage()
    end;
main(_) ->
    usage().

print_list([])->[];
print_list([H|T])->io:format("~s~n",[H]),print_list(T).

usage() ->
    io:format("usage: escript main.erl <filename>\n"),
    halt(1).

