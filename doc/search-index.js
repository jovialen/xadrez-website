var searchIndex = JSON.parse('{\
"xadrez":{"doc":"Xadrez","t":[0,0,0,0,0,0,0,0,0,0,13,3,13,4,4,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,13,13,13,13,13,13,13,13,13,13,13,4,13,13,13,4,4,4,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,5,0,13,13,13,13,4,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,11,11,12,12,17,17,3,11,11,11,11,11,11,11,11,12,11,11,12,11,11,11,11,11,13,13,13,13,13,3,4,13,13,4,13,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,17,17,17,17,17,17,17,17,17,17,17,17,2,2,2,2,2,2,2,2,2,2,2,3,3,11,11,11,11,11,11,11,11,11,11,12,12,11,11,12,11,11,11,11,11,11,11,11,12,12,12,12,12,12,11,12,12,12,12,12,12,11,11,12,11,11,11,11,11,11,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,17,17,17,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["board","builder","error","evaluation","fen","move","piece","prelude","search","square","Checkmate","Chessboard","Draw","DrawReason","GameState","Playing","Rule50","Stalemate","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","default","eq","eq","eq","evaluate","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from_fen","game_state","in_check","index","into","into","into","is_legal","make_move","moves","new","perft","pieces","search","set_position","side_to_move","squares","to_owned","to_owned","to_owned","to_string","to_string","to_string","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","undo","0","BoardBuilder","borrow","borrow_mut","build","castling","default","en_passant","from","fulltime","halftime","into","new","piece","position","start_position","try_from","try_into","type_id","Empty","Empty","IllegalCastling","IllegalMove","InvalidBoardSize","InvalidPiece","InvalidPromotion","InvalidSquare","InvalidSquare","MissingField","MissingKing","MoveError","NoMoves","OutOfTime","ParseClockError","ParseFenError","ParseLANError","SearchError","TrailingField","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","eq","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","into","into","into","into","provide","provide","provide","provide","to_owned","to_owned","to_owned","to_owned","to_string","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","0","evaluate","score","Checkmate","Draw","MateIn","MatedIn","PositionPrediction","Score","absolute_centi_pawns","absolute_pawns","add","add","borrow","borrow","borrow_mut","borrow_mut","centi_pawns","clone","clone","clone_into","clone_into","cmp","default","eq","eq","fmt","fmt","fmt","from","from","into","into","is_mate","neg","neg","partial_cmp","pawns","prediction","relative_to","score","sub","sub","to_owned","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","0","0","FEN_EMPTY_POSITION","FEN_STARTING_POSITION","Move","borrow","borrow_mut","clone","clone_into","eq","fmt","fmt","from","from","from_str","into","to","to_owned","to_string","try_from","try_into","type_id","Bishop","Black","King","Knight","Pawn","Piece","PieceKind","Queen","Rook","Side","White","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","constants","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from_i64","from_u64","into","into","into","kind","new","not","side","to_owned","to_owned","to_owned","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","BLACK_BISHOP","BLACK_KING","BLACK_KNIGHT","BLACK_PAWN","BLACK_QUEEN","BLACK_ROOK","WHITE_BISHOP","WHITE_KING","WHITE_KNIGHT","WHITE_PAWN","WHITE_QUEEN","WHITE_ROOK","BoardBuilder","Chessboard","DrawReason","GameState","Move","Piece","PieceKind","SearchData","SearchLimits","Side","Square","SearchData","SearchLimits","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","default","default","depth","duration","eq","eq","extensions","fmt","fmt","from","from","from_depth","from_duration","into","into","max_depth","max_time","mc_limit","mc_moves","mc_reduction","nodes","none","prunes","qnodes","razoring_depth","razoring_margin","reductions","score","to_owned","to_owned","transposition_hits","try_from","try_from","try_into","try_into","type_id","type_id","A1","A2","A3","A4","A5","A6","A7","A8","B1","B2","B3","B4","B5","B6","B7","B8","BOARD_FILES","BOARD_RANKS","BOARD_SIZE","C1","C2","C3","C4","C5","C6","C7","C8","D1","D2","D3","D4","D5","D6","D7","D8","E1","E2","E3","E4","E5","E6","E7","E8","F1","F2","F3","F4","F5","F6","F7","F8","G1","G2","G3","G4","G5","G6","G7","G8","H1","H2","H3","H4","H5","H6","H7","H8","Square","borrow","borrow_mut","clone","clone_into","distance","eq","fmt","fmt","from","from_i64","from_rank_file","from_str","from_u64","into","to_owned","to_rank_file","to_string","try_from","try_from","try_from","try_into","type_id"],"q":["xadrez","","","","","","","","","","xadrez::board","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","xadrez::board::GameState","xadrez::builder","","","","","","","","","","","","","","","","","","xadrez::error","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","xadrez::error::ParseFenError","xadrez::evaluation","","xadrez::evaluation::score","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","xadrez::evaluation::score::PositionPrediction","","xadrez::fen","","xadrez::move","","","","","","","","","","","","","","","","","","xadrez::piece","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","xadrez::piece::constants","","","","","","","","","","","","xadrez::prelude","","","","","","","","","","","xadrez::search","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","xadrez::square","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Chessboard structures.","Chessboard Builder.","Error types of the chess engine.","Evaluation of the board.","FEN structures.","Chess move structures.","Chess piece structures.","The Xadrez prelude module provides a convenient way to …","Move searching.","Chessboard squares.","The game has ended with a checkmate.","A game of Chess.","The game has ended with a draw, with the reason for the …","A reason for a draw in a chess game.","Represents the current state of the chess game.","The game is currently in progress.","The game is a draw due to the 50-move rule.","The game is a draw due to stalemate.","","","","","","","","","","","","","","","","","Evaluates the current position of the chessboard and …","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Creates a new Chessboard from a Forsyth-Edwards Notation …","Returns the current state of the game, which can be one of …","Returns true if the current side to move is in check, and …","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Checks if the given move is legal on the chessboard.","Makes a move on the chessboard.","Returns a vector of all possible legal moves in the …","Constructs a new <code>Chessboard</code> from a Forsyth-Edwards …","Returns the number of leaf nodes in the game tree for the …","Returns a vector of tuples containing all the pieces on …","Searches for the best move in the current position within …","Sets the position on the chessboard to the one specified …","Returns the Side enum value representing the current side …","Get an array of the squares on the board and the piece on …","","","","","","","","","","","","","","","","Undo the most recent move made on the board.","","Chessboard Builder.","","","Builds and returns a new <code>Chessboard</code> with the desired …","Sets castling rights for the specified side and direction.","","Sets the en-passant square on the chessboard.","Returns the argument unchanged.","Sets the fulltime.","Sets the halftime.","Calls <code>U::from(self)</code>.","Create a new board builder.","Sets a specific <code>Piece</code> on a <code>Square</code> of the board.","Adds the pieces and attributes from the given FEN position …","Set the board to the default starting position.","","","","The input was empty.","The input was empty.","Castling rights given when either the king or the rook aren…","The move was not legal.","The FEN board representation is either too big or too …","No piece represented by the given char.","The promotion of the piece was invalid.","Either the rank or file of the square was out of bounds.","Either the to or from square was invalid.","One or more fields are missing from the FEN string.","The board is missing at least one king.","An error which can be returned when attempting to make a …","There were no legal moves available to search.","The search was terminated due to running out of time.","Failed to parse either the fulltime or halftime clock.","An error which can be returned while parsing a FEN string.","An error which can be returned while parsing long …","The possible errors that can occur during a search.","There are one or more extra fields on the FEN string.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","Evaluate a fen position.","Score of the evaluation.","Checkmate.","Is, or will be, a draw.","Will set the opponent in checkmate in the given amout of …","Will be put in checkmate in the given amount of moves.","Prediction on how the position will develop.","Evaluation for a chess position.","Get a numeric representation of the evaluation relative to …","Get a numeric representation of the evaluation relative to …","","","","","","","Get a numeric representation of the evaluation in …","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Check if the evaluation results in checkmate.","","","","Get a numeric representation of the evalution in pawns.","How the position will develop.","Which side the evaluation is relative to.","The score for the current position, relative to …","","","","","","","","","","","","","","An empty chess position as a FEN string.","The starting position of a chess game as a FEN string.","Structure representing a single move on the chessboard.","","","","","","","","Returns the argument unchanged.","The origin square of the move.","","Calls <code>U::from(self)</code>.","The destination square of the move.","","","","","","The bishop piece.","Black.","The king piece.","The knight piece.","The pawn piece.","Struct representing a single chess piece.","Enum for the possible types of a chess piece.","The queen piece.","The rook piece.","Enum for the possible alignments of a chess piece.","White.","","","","","","","","","","","","","Constants for all the types of chess pieces.","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","The type of the chess piece","Create a new chess piece.","","The alignment of the chess piece.","","","","","","","","","","","","","","","","","","","","The black bishop.","The black king.","The dark knight.","The black pawn.","The black queen.","The black rook.","The white bishop.","The white king.","The white knight.","The white pawn.","The white queen.","The white rook.","","","","","","","","","","","","Search data from a chess move search.","Configures and limits the chess move search.","","","","","","","","","","","Deepest search depth reached during the search.","How long the search lasted.","","","Total amound of depth extended.","","","Returns the argument unchanged.","Returns the argument unchanged.","Depth-limited search.","Time-limited search.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","The maximum search depth.","The maximum amout of time the search can last.","How many cutoffs must occur to prune a branch.","How many moves to evaluate in a multi-cut pruning.","How much to reduce the search depth in a multi-cut search.","How many regular nodes where evaluated in the search.","No search limits.","How many nodes where pruned.","How many quiesce nodes where evaluated in the search.","The depth after which razoring is enabled.","The evaluation margin used for razoring cutoffs.","Total amount of depth reduced.","The score of the best move found in the search.","","","How many nodes where the transposition table was used …","","","","","","","","","","","","","","","","","","","","","","","Count of files on the chessboard.","Count of ranks on the chessboard.","Count of squares on the chessboard in total.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The squares on the chessboard.","","","","","Get the distance between two squares.","","","","Returns the argument unchanged.","","Get the square on the given rank and file.","","","Calls <code>U::from(self)</code>.","","Get the rank and file of the square.","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,2,3,3,1,2,3,1,2,3,1,2,3,1,2,3,1,1,2,3,1,1,1,2,2,3,3,1,2,3,1,1,1,1,1,2,3,1,1,1,1,1,1,1,1,1,1,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,40,0,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,11,26,11,14,11,11,26,11,26,11,11,0,18,18,11,0,0,0,11,11,26,14,18,11,26,14,18,11,26,14,18,11,26,14,18,11,26,14,18,11,11,26,26,14,14,18,18,11,11,26,14,18,11,26,14,18,11,26,14,18,11,26,14,18,11,26,14,18,11,26,14,18,11,26,14,18,11,26,14,18,41,0,0,31,31,31,31,0,0,5,5,5,31,5,31,5,31,5,5,31,5,31,5,5,5,31,5,5,31,5,31,5,31,5,5,31,5,5,5,5,5,5,31,5,31,5,5,31,5,31,5,31,42,43,0,0,0,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,33,19,33,33,33,0,0,33,33,0,19,24,19,33,24,19,33,24,19,33,24,19,33,0,24,19,33,24,24,19,19,33,33,24,19,19,33,33,33,24,19,33,24,24,19,24,24,19,33,24,19,33,24,24,19,33,33,33,33,24,19,33,24,19,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,38,17,38,17,38,17,38,17,38,38,38,17,38,38,17,38,17,38,17,17,17,38,17,17,17,17,17,38,17,38,38,17,17,38,38,17,38,38,17,38,17,38,17,38,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,0,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[1,1],[2,2],[3,3],[[]],[[]],[[]],[[],1],[[1,1],4],[[2,2],4],[[3,3],4],[1,5],[[1,6],[[8,[7]]]],[[1,6],[[8,[7]]]],[[2,6],9],[[2,6],9],[[3,6],9],[[3,6],9],[[]],[[]],[[]],[10,[[8,[1,11]]]],[1,2],[1,4],[[1,12]],[[]],[[]],[[]],[[1,13],4],[[1,13],[[8,[13,14]]]],[1,[[15,[13]]]],[10,1],[[1,16,4],16],[1,15],[[1,17],[[8,[18]]]],[[1,10],[[8,[11]]]],[1,19],[1],[[]],[[]],[[]],[[],20],[[],20],[[],20],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],21],[[],21],[[],21],[1],0,0,[[]],[[]],[22,[[8,[1,11]]]],[[22,19,4,4],22],[[],22],[[22,12],22],[[]],[[22,23],22],[[22,23],22],[[]],[[],22],[[22,12,[25,[24]]],22],[[22,10],[[8,[22,11]]]],[22,22],[[],8],[[],8],[[],21],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[11,11],[26,26],[14,14],[18,18],[[]],[[]],[[]],[[]],[[11,11],4],[[26,26],4],[[14,14],4],[[18,18],4],[[11,6],9],[[11,6],9],[[26,6],9],[[26,6],9],[[14,6],9],[[14,6],9],[[18,6],9],[[18,6],9],[[]],[27,11],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[28],[28],[28],[28],[[]],[[]],[[]],[[]],[[],20],[[],20],[[],20],[[],20],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],21],[[],21],[[],21],[[],21],0,[10,[[8,[5,11]]]],0,0,0,0,0,0,0,[5,29],[5,30],[[5,29]],[[31,29]],[[]],[[]],[[]],[[]],[5,29],[5,5],[31,31],[[]],[[]],[[5,5],32],[[],5],[[5,5],4],[[31,31],4],[[5,6],[[8,[7]]]],[[5,6],9],[[31,6],9],[[]],[[]],[[]],[[]],[5,4],[5],[31],[[5,5],[[25,[32]]]],[5,30],0,0,0,[[5,29]],[[31,29]],[[]],[[]],[[],20],[[],8],[[],8],[[],8],[[],8],[[],21],[[],21],0,0,0,0,0,[[]],[[]],[13,13],[[]],[[13,13],4],[[13,6],9],[[13,6],9],[[]],0,[10,[[8,[13]]]],[[]],0,[[]],[[],20],[[],8],[[],8],[[],21],0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[24,24],[19,19],[33,33],[[]],[[]],[[]],0,[[24,24],4],[[19,19],4],[[33,33],4],[[24,6],9],[[24,6],9],[[19,6],9],[[19,6],9],[[33,6],9],[[33,6],9],[[]],[[]],[34,19],[[]],[35,[[25,[33]]]],[36,[[25,[33]]]],[[]],[[]],[[]],0,[[19,33],24],[19],0,[[]],[[]],[[]],[[],20],[[],20],[[],20],[[],8],[34,[[8,[24]]]],[[],8],[37,[[8,[33]]]],[16,[[8,[33]]]],[[],8],[34,[[8,[33]]]],[[],8],[[],8],[[],8],[[],21],[[],21],[[],21],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[17,17],[38,38],[[]],[[]],[[],17],[[],38],0,0,[[17,17],4],[[38,38],4],0,[[17,6],9],[[38,6],9],[[]],[[]],[16,17],[39,17],[[]],[[]],0,0,0,0,0,0,[[],17],0,0,0,0,0,0,[[]],[[]],0,[[],8],[[],8],[[],8],[[],8],[[],21],[[],21],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[12,12],[[]],[[12,12],30],[[12,12],4],[[12,6],9],[[12,6],9],[[]],[35,[[25,[12]]]],[[],[[8,[12,11]]]],[10,[[8,[12]]]],[36,[[25,[12]]]],[[]],[[]],[12],[[],20],[16,[[8,[12]]]],[37,[[8,[12]]]],[[],8],[[],8],[[],21]],"p":[[3,"Chessboard"],[4,"GameState"],[4,"DrawReason"],[15,"bool"],[3,"Score"],[3,"Formatter"],[3,"Error"],[4,"Result"],[6,"Result"],[15,"str"],[4,"ParseFenError"],[4,"Square"],[3,"Move"],[4,"MoveError"],[3,"Vec"],[15,"usize"],[3,"SearchLimits"],[4,"SearchError"],[4,"Side"],[3,"String"],[3,"TypeId"],[3,"BoardBuilder"],[15,"u32"],[3,"Piece"],[4,"Option"],[4,"ParseLANError"],[3,"ParseIntError"],[3,"Demand"],[15,"i32"],[15,"f64"],[4,"PositionPrediction"],[4,"Ordering"],[4,"PieceKind"],[15,"char"],[15,"i64"],[15,"u64"],[15,"isize"],[3,"SearchData"],[3,"Duration"],[13,"Draw"],[13,"ParseClockError"],[13,"MateIn"],[13,"MatedIn"]]},\
"xadrez_cli":{"doc":"","t":[5,5,5,5,5,5,14,5,5],"n":["do_move","main","perft","play","position","pretty_print_position","print_if_err","print_moves","search"],"q":["xadrez_cli","","","","","","","",""],"d":["","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,0],"f":[[[1,2],[[5,[[4,[3]]]]]],[[]],[[1,2]],[[1,2]],[[1,2],[[5,[6]]]],[[1,2]],0,[[1,2]],[[1,2]]],"p":[[3,"Chessboard"],[8,"Iterator"],[8,"Error"],[3,"Box"],[4,"Result"],[4,"ParseFenError"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
